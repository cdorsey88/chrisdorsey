#!/usr/bin/env python3
"""
voice-lint.py — flag AI-writing "tells" in a draft before you publish.

Usage:
    python3 voice-lint.py path/to/draft.md [more files ...]
    cat draft.md | python3 voice-lint.py          # read from stdin
    python3 voice-lint.py --quiet path/to/draft.md # only print if something is found

What it does:
    Scans prose for the patterns from your June 2026 site audit + writing-voice
    skill: the banned "it's not X, it's Y" negation, rhythmic triplets, AI
    vocabulary, moralizing closers, vague attribution, em-dash overload, and
    self-similarity against your previous post closers.

Exit codes:
    0 = clean (or only soft flags)
    1 = at least one HARD-ban tell found
    2 = bad usage / file not found

No dependencies — just Python 3. Tune the lists below freely; they're plain data.
"""

import sys, os, re

# Where we remember the closing lines of posts you've already shipped, so we can
# warn when a new ending repeats an old one. Lives next to this script.
HERE = os.path.dirname(os.path.abspath(__file__))
CLOSERS_LOG = os.path.join(HERE, ".voice-lint-closers.txt")

# ----------------------------------------------------------------------------
# 1. HARD bans — these are the "a machine wrote this" giveaways. Fix every one.
# ----------------------------------------------------------------------------
HARD_REGEX = [
    # "it's not X, it's Y" and "not just X but Y"
    (r"\bnot just\b[^.?!\n]{1,80}?,?\s*but\b",
     'negation: "not just X, but Y"'),
    (r"\bit'?s not\b[^.?!\n]{1,80}?,\s*(it'?s|it is|it'?s about)\b",
     'negation: "it\'s not X, it\'s Y"'),
    # "isn't X. It's Y" / "is not X. That is Y" across a sentence break
    (r"\b(is|are|was|were)n'?t\b[^.?!\n]{0,80}[.?!]\s+(it'?s|it is|that'?s|that is|they'?re)\b",
     'negation: "isn\'t X. It\'s Y."'),
    (r"\b(is|are|was|were) not\b[^.?!\n]{0,80}[.?!]\s+(it'?s|it is|that'?s|that is|they'?re)\b",
     'negation: "is not X. That is Y."'),
    # "won't be X. They'll be Y."
    (r"\bwon'?t be\b[^.?!\n]{0,80}[.?!]\s+(it'?ll|they'?ll|it will|they will)\b",
     'negation: "won\'t be X. They\'ll be Y."'),
    # "X is over. Y is just beginning."
    (r"\bis over\.\s+[^.?!\n]{0,70}(just (beginning|getting started|started)|begins|is beginning)",
     'cliche: "X is over. Y is just beginning."'),
    # rhythmic triplet of negated fragments: "Not X. Not Y."
    (r"\bNot\b[^.?!\n]{1,30}[.?!]\s+Not\b[^.?!\n]{1,30}[.?!]",
     'tricolon: "Not X. Not Y." fragment stack'),
    # explicitly-banned reveal phrases (your memory)
    (r"\bquiet(er)? (tell|truth|confidence|part|rebellion)\b",
     'banned reveal: "quiet ___" family'),
    (r"\bthe line that stuck with me\b",
     'banned reveal: "the line that stuck with me"'),
    (r"\bhere'?s the (kicker|thing|part most people)\b",
     'banned reveal: "here\'s the kicker/thing"'),
    (r"\bthe best part\??\b",
     'banned reveal: "the best part?"'),
    (r"\b(let'?s be honest|and honestly\??|make no mistake|the reality is|let'?s dive in)\b",
     'throat-clearing / faux-intimacy opener'),
    (r"\b(in today'?s|now more than ever)\b",
     'hype filler'),
]

# Moralizing / aphoristic closers — only HARD when they appear in the LAST
# paragraph (handled separately so we don't punish them mid-body).
CLOSER_REGEX = [
    (r"\b(in conclusion|in summary|at the end of the day|when all is said and done)\b",
     'moralizing closer phrase'),
    (r"^\s*ultimately[ ,]",
     'closer opener "Ultimately,"'),
    (r"\b(the journey doesn'?t end here|the choice is ours|change is the only constant)\b",
     'poster-quote / universal-truism closer'),
]

# ----------------------------------------------------------------------------
# 2. SOFT flags — fine in ones and twos; a problem when dense. Reported with counts.
# ----------------------------------------------------------------------------
SOFT_VOCAB = [
    "delve", "delves", "delving", "underscore", "underscores", "underscoring",
    "showcase", "showcases", "showcasing", "leverage", "leverages", "harness",
    "streamline", "foster", "navigate", "navigating", "tapestry", "landscape",
    "realm", "ecosystem", "testament", "cornerstone", "beacon", "pivotal",
    "robust", "seamless", "seamlessly", "vibrant", "transformative",
    "comprehensive", "holistic", "nuanced", "multifaceted", "paramount",
]
SOFT_INTENSIFIERS = ["actually", "genuinely", "truly", "simply", "essentially",
                     "crucially", "notably", "importantly", "fundamentally"]
SOFT_ATTRIBUTION = [r"studies show", r"experts say", r"research suggests",
                    r"it'?s widely (believed|known)", r"many believe"]
SOFT_REGEX = [
    # bare "X, not Y." reversal — soft, because it's often a legitimate
    # clarification ("the original PDF, not the recap"). Only the templated
    # "it's not X, it's Y" forms above are hard bans.
    (r"\b\w+,\s*not\s+\w[\w\s'-]{0,40}[.?!]",
     'possible "X, not Y" reversal (fine if a real clarification)'),
    (r",\s*\w+ing\b[^.?!\n]{0,45}?\b(importance|need|moment|shift|relevance|power|potential|trend)\b",
     'participial significance-tail ("...underscoring its importance")'),
    (r"\?\s+(The|Its|Their)\s+(answer|result|catch|kicker|reason)\b",
     'rhetorical-question reveal ("...? The answer:")'),
    (r"\bsaid the quiet part out loud\b",
     'recurring crutch phrase: "said the quiet part out loud"'),
]

# ----------------------------------------------------------------------------
# Prose extraction: strip JSX/HTML tags, markdown link syntax, code/imports.
# ----------------------------------------------------------------------------
def to_prose(raw):
    lines = []
    in_code = False
    for ln in raw.splitlines():
        s = ln.rstrip("\n")
        if s.strip().startswith("```"):
            in_code = not in_code
            continue
        if in_code:
            continue
        # drop obvious code lines
        if re.match(r"\s*(import |export |const |let |function |//|/\*|\*)", s):
            continue
        s = re.sub(r"<[^>]+>", "", s)                 # JSX/HTML tags
        s = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", s) # md links -> text
        s = re.sub(r"[*_`#>]", "", s)                  # md emphasis/headers
        lines.append(s)
    return lines

def words(text):
    return re.findall(r"[A-Za-z']+", text)

def jaccard(a, b):
    sa, sb = set(a), set(b)
    if not sa or not sb:
        return 0.0
    return len(sa & sb) / len(sa | sb)

# ----------------------------------------------------------------------------
# Lint one file's text. Returns (hard_hits, soft_hits) lists of strings.
# ----------------------------------------------------------------------------
def lint(raw, label):
    lines = to_prose(raw)
    full = "\n".join(lines)
    hard, soft = [], []

    for i, line in enumerate(lines, 1):
        low = line.lower()
        for pat, name in HARD_REGEX:
            if re.search(pat, line, re.I):
                hard.append(f"  L{i}  [{name}]\n        {line.strip()[:140]}")

    # Closers: check the last ~2 non-empty paragraphs for closer tells.
    nonempty = [l for l in lines if l.strip()]
    tail = "\n".join(nonempty[-6:]).lower() if nonempty else ""
    for pat, name in CLOSER_REGEX:
        if re.search(pat, tail, re.I | re.M):
            hard.append(f"  CLOSER  [{name}] — appears in your final paragraph; rewrite the ending.")

    # Soft: vocabulary + intensifier counts
    wlist = [w.lower() for w in words(full)]
    wc = len(wlist) or 1
    def count_any(terms):
        c = 0; found = {}
        for w in wlist:
            if w in terms:
                c += 1; found[w] = found.get(w, 0) + 1
        return c, found
    vc, vf = count_any(set(SOFT_VOCAB))
    if vc:
        top = ", ".join(f"{k}×{v}" for k, v in sorted(vf.items(), key=lambda x:-x[1]))
        soft.append(f"  AI vocabulary: {vc} hit(s) — {top}")
    ic, if_ = count_any(set(SOFT_INTENSIFIERS))
    if ic:
        top = ", ".join(f"{k}×{v}" for k, v in sorted(if_.items(), key=lambda x:-x[1]))
        soft.append(f"  Empty intensifiers: {ic} hit(s) — {top}")

    for pat in SOFT_ATTRIBUTION:
        if re.search(pat, full, re.I):
            soft.append(f'  Vague attribution: "{pat}" — name the source or cut it.')
    for pat, name in SOFT_REGEX:
        for m in re.finditer(pat, full, re.I):
            soft.append(f"  {name}")
            break

    # Em-dash density (— ). Flag if more than ~1 per 100 words or >4 total.
    dashes = full.count("—")
    if dashes and (dashes > 4 or dashes / wc * 100 > 1.0):
        soft.append(f"  Em-dashes: {dashes} in ~{wc} words — thin them; keep only sharp interruptions.")

    # Rhythmic triplet of short sentences (three <=5-word sentences in a row).
    sents = re.split(r"(?<=[.?!])\s+", full)
    run = 0
    for s in sents:
        if 0 < len(words(s)) <= 5:
            run += 1
            if run == 3:
                soft.append("  Tricolon: three very short sentences in a row — break the cadence.")
                break
        else:
            run = 0

    # Self-similarity: compare this post's closer to prior shipped closers.
    closer = nonempty[-1].strip() if nonempty else ""
    if closer:
        cw = [w.lower() for w in words(closer)]
        prior = []
        if os.path.exists(CLOSERS_LOG):
            with open(CLOSERS_LOG, encoding="utf-8") as f:
                prior = [l.strip() for l in f if l.strip()]
        for p in prior:
            if jaccard(cw, [w.lower() for w in words(p)]) > 0.4:
                soft.append(f'  Repeated ending: your closer echoes a past post\'s closer:\n        "{p[:120]}"')
                break

    return hard, soft, closer

# ----------------------------------------------------------------------------
def main():
    args = [a for a in sys.argv[1:] if not a.startswith("-")]
    quiet = "--quiet" in sys.argv
    remember = "--remember" in sys.argv  # append this post's closer to the log

    inputs = []
    if args:
        for p in args:
            if not os.path.exists(p):
                print(f"voice-lint: file not found: {p}", file=sys.stderr)
                sys.exit(2)
            with open(p, encoding="utf-8", errors="replace") as f:
                inputs.append((p, f.read()))
    else:
        data = sys.stdin.read()
        if not data.strip():
            print("voice-lint: nothing to read (pass a file or pipe text).", file=sys.stderr)
            sys.exit(2)
        inputs.append(("<stdin>", data))

    any_hard = False
    for label, raw in inputs:
        hard, soft, closer = lint(raw, label)
        if quiet and not hard and not soft:
            continue
        print(f"\n=== voice-lint: {label} ===")
        if hard:
            any_hard = True
            print(f"\nHARD bans ({len(hard)}) — fix before publishing:")
            for h in hard:
                print(h)
        if soft:
            print(f"\nSoft flags ({len(soft)}) — review if dense:")
            for s in soft:
                print(s)
        if not hard and not soft:
            print("  Clean. No tells found.")
        if remember and closer:
            with open(CLOSERS_LOG, "a", encoding="utf-8") as f:
                f.write(closer + "\n")
            print(f"\n  (Logged this closer for future self-similarity checks.)")

    print("\n" + ("FAIL — hard bans present." if any_hard else "PASS — no hard bans."))
    sys.exit(1 if any_hard else 0)

if __name__ == "__main__":
    main()
