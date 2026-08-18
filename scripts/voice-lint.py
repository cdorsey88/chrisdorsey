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
    (r"\b(it'?s|it is|this is) not\b[^.?!\n]{1,80}?,\s*(it'?s|it is|this is|it'?s about)\b",
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
    # --- added Jul 2026: CLAUDE.md tells that weren't yet encoded ---
    # "isn't just X, it's Y" (the linter caught "not just...but" but not this)
    (r"\b(is|are)n'?t just\b[^.?!\n]{1,60}[,;—]\s*(it|they|that)\b",
     'negation: "isn\'t just X, it\'s Y"'),
    # framing crutches: "the read is simple", "here's the read"
    (r"\b(the read is simple|here'?s the read)\b",
     'framing crutch: "the read is simple / here\'s the read"'),
    # unearned honesty: "the honest framing/version/answer is"
    (r"\bthe honest (framing|version|answer|take|read|question)\b",
     'unearned-honesty framing: "the honest ___"'),
    (r"\bthe real (question|story|opportunity) is\b",
     'unearned-honesty framing: "the real question/story is"'),
    # prescriptive tee-ups: "the durable play is", "the smart move is"
    (r"\bthe (durable|smart|winning|real|right) (play|move|bet) (is|here)\b",
     'prescriptive tee-up: "the durable/smart play is"'),
    (r"\bthe play here is\b",
     'prescriptive tee-up: "the play here is"'),
    # insight-tease: announcing a buried deeper point instead of making it
    (r"\b(buried|hiding|hidden) (one layer|a layer|underneath|beneath)\b",
     'insight-tease: "buried one layer down"'),
    (r"\bthe part (nobody|no one)('?s| is)? (talking about|noticing|pricing)\b",
     'insight-tease: "the part nobody\'s talking about"'),
    (r"\bdig a little deeper\b",
     'insight-tease: "dig a little deeper"'),
    # significance-flagging: telling the reader a point is significant
    (r"\b(that|this|it|which) is the tell\b|\bthat'?s the tell\b",
     'significance-flag: "that\'s the tell"'),
    (r"\bthe (pattern|picture) is (clear|hard to miss)\b",
     'significance-flag: "the pattern is clear"'),
    (r"\byou can see where this is going\b",
     'significance-flag: "you can see where this is going"'),
    (r"\b(let that sink in|sit with that|read that again|full stop\.)\b",
     'reader-instruction: "let that sink in / read that again / full stop"'),
    (r"\b(stay with me|pay attention to this|here'?s what happened next)\b",
     'reader-instruction: "stay with me / here\'s what happened next"'),
    (r"\bwatch what \w[\w\s]{0,30}(did|does) next\b",
     'reader-instruction: "watch what X did next"'),
    # compute-imperative: ordering the reader to do a calculation you're about to
    # do for them anyway. Just state the result.
    (r"\b(run|do|check|crunch|work out) the (math|arithmetic|numbers|calculation)\b",
     'compute-imperative: "run the math/arithmetic/numbers" — just state the result'),
    (r"\bthe (math|arithmetic) (is|here is|on this is) (simple|brutal|ugly|straightforward|not complicated)\b",
     'compute tee-up: "the math is simple" — give the number instead'),
    (r"\b(put|stack|hold) (that|those|these|it) (up )?(side by side|next to|against)\b",
     'reader-instruction: "put those side by side" — do the comparison on the page'),
    (r"\b(this|that|it) is the (playbook|blueprint|template)\b",
     'significance tee-up: "this is the playbook/blueprint/template"'),
    # labeled-musing tee-ups
    (r"\bI keep (landing on|coming back to|chewing on|wrestling with)\b",
     'labeled-musing tee-up: "the thing I keep coming back to"'),
    # "feature, not a bug" cliche (both directions)
    (r"\b(a )?(feature,? not a bug|bug,? not a feature)\b",
     'cliche: "feature, not a bug"'),
    # "quietly [verb]ing" insinuation
    (r"\bquietly (rewriting|drawing|placing|building|becoming|reshaping|redrawing|assembling|winning|eating)\b",
     'insinuation: "quietly [verb]ing" — say plainly what happened'),
    # --- added Aug 2026: 2026-vintage tells ---
    # "Enter <Proper Noun>." — the blog-transition tic
    (r"(^|[.?!]\s+)Enter\s+[A-Z][\w.\-]*[.,]",
     'transition tic: "Enter <Company>."'),
    (r"\b(cue the|welcome to the (era|age|world) of|in a world where)\b",
     'hype transition: "cue the / welcome to the era of / in a world where"'),
    (r"\b(let me (explain|be clear)|spoiler( alert)?:|hot take:)\b",
     'faux-intimacy / faux-precision opener'),
    (r"\bstop me if you'?ve heard this (one|before)\b",
     'faux-intimacy opener: "stop me if you\'ve heard this"'),
    (r"\b(buckle up|strap in)\b",
     'hype filler: "buckle up"'),
    # structural narration — describing your own essay instead of writing it
    (r"\b(the )?(through-?line|punchline) (is|here is)\b",
     'structural narration: "the throughline/punchline is"'),
    (r"\bwhat'?s (actually|really) (happening|going on) (here )?is\b",
     'significance-flag: "what\'s really happening is"'),
    (r"\bhere'?s what (that|this) means for (you|your)\b",
     'signposting: "here\'s what that means for you"'),
    (r"\bso what does (this|that) mean\??",
     'signposting: "so what does this mean?"'),
    # sibling of the banned "quiet truth" family
    (r"\bthe (uncomfortable|inconvenient|unglamorous|unsexy) (truth|reality|answer|part|math)\b",
     'banned reveal: "the uncomfortable truth" family'),
    (r"\bnobody (wants to|is willing to) (say|admit) (this|it)\b",
     'insight-tease: "nobody wants to say this"'),
    # 2026 commentary tics
    (r"\b(is|are|was|were)\s+doing (a lot of|most of|all of|the) (the )?(work|heavy lifting)\b",
     'commentary tic: "doing a lot of work here"'),
    (r"\bif you squint\b",
     'commentary tic: "if you squint"'),
    # dead metaphors
    (r"\b(the writing is on the wall|canary in the coal ?mine|tip of the iceberg|double-?edged sword|the genie is out of the bottle|moving the goalposts?)\b",
     'dead metaphor'),
    (r"\b(seismic|tectonic) (shift|change)\b|\bsea change\b",
     'dead metaphor: "seismic/tectonic shift"'),
    (r"\ba masterclass in\b",
     'cliche: "a masterclass in"'),
    (r"\b(living rent[- ]free|make it make sense|chef'?s kiss|it'?s giving)\b",
     'social slop phrasing'),
    (r"\b\w+ walked so \w+ could run\b",
     'cliche: "X walked so Y could run"'),
    (r"\bthe (question|issue|problem) (is|isn'?t|is not) (whether|if)\b[^.?!\n]{1,80}\bit'?s\b",
     'negation: "the question isn\'t X, it\'s Y"'),
    # --- added Aug 2026 (v4): shapes pulled from a live edit pass ---
    # anaphoric negate-then-restate: "The X was never A. ... The X was B."
    (r"\b(The \w+) was (almost never|never|rarely|not|hardly ever)\b[^.?!\n]*[.?!](?:[^.?!\n]*[.?!])?\s*\1 was\b",
     'anaphoric negate-restate: "The X was never A... The X was B"'),
    # balanced metaphor couplet: "The fee was the appetizer. The window was the check."
    (r"\bThe \w+ (was|is) the \w+\.\s+The \w+ (was|is) the \w+\.",
     'aphoristic couplet: "The X was the A. The Y was the B."'),
    # verbless two-beat verdict fragment: "Better ceiling, same shape."
    (r"(^|[.?!]\s+)(Better|Bigger|Smaller|Higher|Lower|Faster|Slower|Newer|Older|Same|More|Less|Different)\s+\w+,\s*(same|different|new|old|better|worse|bigger|smaller|higher|lower|fewer|more|less)\s+\w+\.",
     'verbless verdict fragment: "Better ceiling, same shape."'),
    # significance-flagging the paragraph you are about to write
    (r"\b(this|that|here) is the part (that|where)\b",
     'significance-flag: "this is the part that..."'),
    (r"\bgets? (misdiagnosed|misread|misunderstood|overlooked|underrated)\b",
     'significance-flag: "the part that gets misread"'),
    # tired idiom for self-interest
    (r"\b(grading|marking) (their|his|her|its|your|my) own homework\b",
     'dead idiom: "grading their own homework"'),
    # strawman reader / preemptive insult
    (r"\banyone (who|walking|coming|showing up|going|reading)\b[^.?!\n]{0,90}\b(is going to|will|would) (sound|look|come off|come across)\b",
     'strawman-reader insult: "anyone who X will sound like Y"'),
    # mirrored imperative-conditional pair
    (r"\b(Run|Put|Push|Feed|Send|Take) (that|this|the same) \w+ through\b[^.?!\n]{0,90}\band it (is|becomes|turns)\b",
     'imperative-conditional mirror: "Run X through A and it is B"'),
    # self-congratulatory novelty claim
    (r"\b(I|we) (have not|haven'?t|had not) seen\b[^.?!\n]{0,50}\b(written|said|covered|reported|made|anywhere|by anyone)\b",
     'novelty self-congratulation: "I haven\'t seen this written anywhere"'),
    (r"\bthe (shift|thing|part|point|angle) (I|we) (have not|haven'?t) seen\b",
     'novelty self-congratulation: "the part I haven\'t seen"'),
    # parallel-preposition antithesis couplet ("Under X... Under Y...")
    (r"\bUnder (the|a|an|this|that) [^.?!\n]{2,55}[,.][^.?!\n]{0,90}[.?!]\s+Under (the|a|an|this|that)\b",
     'parallel-preposition couplet: "Under X... Under Y..."'),
    # snide either/or aside + cutesy hedge
    (r"\bwhich is either \w+ or \w+\b",
     'snide either/or aside: "which is either X or Y"'),
    (r"\bdepending on your (mood|priors|politics|taste|tolerance)\b",
     'cutesy hedge: "depending on your mood"'),
    # performative humility / invitation to correct
    (r"\b(I'?d|I would|happy to|glad to|I'?m happy to)\s*(happily |gladly )?be (corrected|proven wrong|told otherwise)\b",
     'performative humility: "I\'d happily be corrected"'),
    (r"\bcorrect me if I'?m wrong\b",
     'performative humility: "correct me if I\'m wrong"'),
    # significance tag — telling the reader a fact is important instead of showing it
    (r",\s*(and|which) (that|this|it) (matters|counts|is significant|is the point|should tell you)\b",
     'significance tag: ", and that matters"'),
    (r"\band (that|this|it) matters\.",
     'significance tag: "and that matters."'),
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
    # --- added Aug 2026 ---
    (r"\b(time will tell|one thing is clear|watch this space|we'?re just getting started)\b",
     'closer cliche: "time will tell / one thing is clear"'),
    (r"\bthe next (\d+|twelve|six|eighteen|twenty-four) months will (tell|decide|determine|be)\b",
     'closer cliche: "the next 12 months will tell"'),
    (r"\bwelcome to the new normal\b",
     'closer cliche: "welcome to the new normal"'),
    (r"\bthat'?s the (world|game) (we'?re|we are) (living in|playing) now\b",
     'closer cliche: "that\'s the world we live in now"'),
    (r"^\s*(and )?that'?s the (whole )?point\.?\s*$",
     'closer cliche: standalone "That\'s the point."'),
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
    # added Jul 2026
    "supercharge", "supercharged", "supercharges", "skyrocket", "skyrocketed",
    "skyrocketing", "unpack", "unpacking", "paradigm", "juggernaut",
    "meteoric", "behemoth", "trailblazing", "groundbreaking",
    # added Aug 2026
    "unlock", "unlocks", "unlocking", "reimagine", "reimagined", "reimagining",
    "redefine", "redefines", "revolutionize", "revolutionizes", "democratize",
    "democratizes", "democratizing", "frictionless", "turnkey", "bespoke",
    "curated", "elevate", "elevates", "empower", "empowers", "empowering",
    "actionable", "synergy", "synergies", "ideate", "operationalize",
    "learnings", "myriad", "plethora", "veritable", "staggering", "sobering",
    "eye-watering", "jaw-dropping", "game-changer", "game-changing",
    "cutting-edge", "state-of-the-art", "best-in-class", "world-class",
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
    # generic label subheads (post-markdown-strip these are bare lines)
    (r"^\s*(The read|The takeaway|The bottom line|Why it matters|The upshot)\s*$",
     'generic label subhead ("The read" / "Why it matters") — state the actual point'),
    # coined slogan-abstraction shape: "X without Y" as a branded phrase is fine
    # in ones; flag the "truth is," opener which reads as unearned honesty
    (r"^\s*truth is[, ]",
     'unearned-honesty opener: "Truth is,"'),
    # --- added Aug 2026 ---
    (r"\bzoom(ing)? (out|in)\b",
     'structural narration: "zoom out/in" — just make the wider point'),
    (r"\bto be clear,",
     'faux-precision opener: "To be clear,"'),
    (r"\bwhich is to say\b",
     'AI connective: "which is to say"'),
    (r"\bat the risk of (stating the obvious|oversimplifying)\b",
     'hedge tee-up'),
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
        # decode common HTML entities so apostrophe/dash patterns still match
        # JSX prose ("it&rsquo;s not" was invisible to the linter before this)
        for ent, ch in (("&rsquo;", "'"), ("&lsquo;", "'"), ("&ldquo;", '"'),
                        ("&rdquo;", '"'), ("&mdash;", "—"), ("&ndash;", "–"),
                        ("&amp;", "&"), ("&nbsp;", " "), ("&hellip;", "…")):
            s = s.replace(ent, ch)
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
