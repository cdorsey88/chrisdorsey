@AGENTS.md

## Output preferences
- Default written outputs (reports, documents, summaries, letters, plans, etc.) to .docx Word documents, not .md markdown files.
- For multi-option / review deliverables meant for Chris to read and choose from (e.g., a set of draft angles or post drafts), prefer a Google Doc over a local .docx so he can read and comment in Drive. Use the connected Google Drive connector to create it.

## Morning briefing — added sections (added Jun 2026)
Include these in every morning-briefing output. The scheduled morning-briefing skill lives in a read-only cache and can't be edited from Cowork, so these prefs live here; to bake them into the skill itself, update it in Settings > Capabilities.

**Delivery (updated Jun 2026):** When the briefing is generated in an interactive chat session, output it directly in the chat. Do NOT create a Gmail draft. (The automated weekday 7:30am scheduled run still has nowhere to post in chat, so it continues to email a draft unless Chris changes that task.)

Section order: Quote/On-this-day → Schedule → Inbox → Job Leads → News Highlight (National / AI-GTM / Denver) → Podcasts → Reddit.

### Quote / "On this day" opener
- Open with ONE short line: a "this day in history" note for the date (or a short quote). No padding.

### 🎧 Podcasts (new daily section)
Track these shows; surface any episode published in the last ~48h. For each: show · episode date · guest · one line on what they discuss. If nothing new, write "No new episode since [date]." Keep to 1-2 lines each. Order comedy/interview first, then the AI show.
- So True with Caleb Hearon
- Armchair Expert (Dax Shepard)
- The Tim Dillon Show (often solo — note the topics he covers)
- Conan O'Brien Needs a Friend
- The AI Daily Brief (Nathaniel Whittemore / "NLW") — daily AI news; pull that day's topics

**Discovery picks (don't only check the tracked shows):** every run, surface 2-3 episodes from ANY show that fit Chris's tastes — music (esp. electronic/dance, deep-dive music history), food, travel, current events, comedians, and loose "shoot-the-shit" hangs. Include serialized/multipart deep-dive series (e.g. Dissect, Switched On Pop, 60 Songs…). For each: show · episode/series · one line on why it's up his alley + a link. Favor genuinely interesting/new over recency. Note when something is a multipart series worth bingeing.

### 📰 News Highlight (expanded from "Today's Intel")
Three buckets, 2-4 items each, linked headline + one sentence:
- National: top US headlines of the day.
- AI / GTM industry: enterprise AI, sales tech, model releases (the existing coverage).
- Denver / Colorado: local news, weather/ozone alerts, notable events.
Keep retail-media items where job-relevant and tie them to the Job Leads section; the standing news buckets are National / AI-GTM / Denver.

## Daily LinkedIn comments routine
- Output goes to ONE running Google Doc, "Dorsey Daily Engage - LinkedIn" (id `1AG1C_0pYTZmBPi8FwoxeTegwMERyPmwRglVwFhotshQ`, https://docs.google.com/document/d/1AG1C_0pYTZmBPi8FwoxeTegwMERyPmwRglVwFhotshQ/edit). Do NOT create a Gmail draft for this anymore.
- Each run, prepend a new dated section to the top of that doc (newest first), keeping prior days below. The Drive connector can't edit docs in place, so append by opening the doc URL in Chrome and typing the new section at the top.
- For each post, include the FULL exact copy of the person's LinkedIn post (verbatim) and the timestamp it showed when captured (e.g. "10m / ~9:58 AM MT, Jun 23") so Chris can find it fast. Then the gist, profile link, and the drafted comment.
- **Finish fast (added Jun 2026):** Chris wants the run done as quickly as possible. Cap company content-searches at ~6–8; take the first 5 qualifying target-company posts rather than over-hunting for a perfect company spread. A solid, clearly-qualifying post beats a marginally better one found 10 searches later. Don't re-verify or re-capture more than needed. If Chrome drops mid-run, retry a couple times and keep going. Aim to wrap the whole routine in well under the time it took on Jun 25.
- **Targeting (updated Jun 29 2026):** Prioritize Chris's DREAM companies and the spaces he most wants to work in — spend the first searches there. Still strictly EMPLOYER-GATED: only people who actually work at a target/dream company or a direct same-vertical peer. Do NOT pick influencers, recruiters, creators, coaches, or "thought leaders," however influential — the author's employer is the whole point.
  - **Tier-1 dream companies (may repeat day to day; EXEMPT from the variety rule):** the labs — OpenAI, Anthropic, Google (esp. Google Ads & Google Cloud GTM); other frontier AI — Perplexity, Cohere, Mistral, xAI; top retail media — Amazon Ads, Walmart Connect, Instacart.
  - **Variety:** for every NON-tier-1 company, avoid obvious sameness — don't keep surfacing the same company on back-to-back runs. Loose judgment, no hard spread quota, and finish-fast still applies (if the only fresh, clearly-qualifying post that day is a repeat non-tier-1 company, use it).
  - **Function priority (added Jul 1 2026):** Beyond the employer gate, strongly prefer authors in SALES, MARKETING, OPS, PARTNERSHIPS, CUSTOMER SUCCESS, or STRATEGY roles (and senior product/GTM leaders) — the people whose visibility actually advances Chris's goal of getting seen by hiring-relevant folks at places he'd want to work. DEPRIORITIZE engineers, HR/recruiting, finance, and other non-GTM lanes even at a target company; only use one of those if it's a strong, clearly-qualifying post and nothing better in-lane is available that day, and prefer that it be within AI and/or MadTech. When choosing among qualifying posts, the in-lane (GTM/strategy) author beats the off-lane one.
  - **Seniority floor (added Jul 9 2026):** Authors must be at least a Senior IC or Senior Manager — ideally Director / VP / C-level. NO lower-level people: no field marketers, no account managers / account executives / client partners (client-facing "manage the book" roles), no coordinators/specialists/associates. Look for Director, Sr. Director, VP, SVP, GM, Head of, Chief, or clearly senior individual contributors (e.g., Principal, senior strategy/BD leaders). When in doubt about a title, skip it and find someone more senior.
  - **Topic focus (added Jul 9 2026):** Beyond seniority, favor posts about STRATEGY, client development / how they win and grow accounts, sales approach / GTM motion, AI industry news, AI-company news, and new product releases/launches. Deprioritize thin culture/team-welcome/hiring/event-promo posts even from senior people. The best picks pair a senior author with a substantive strategy/sales/AI-news take Chris can add a real POV to.
  - **No exact repeats:** before finalizing, check the running doc's last several days and drop any post that's the same author + same post already logged recently (even tier-1) — re-handing Chris a duplicate adds no value. Backfill with a fresh name.
  - **Ideal post archetype (added Jul 2 2026):** The gold-standard target is a first-person, specific, slightly-vulnerable STORY or PLAYBOOK from a senior GTM/sales leader who works at a target company — e.g. Carles Reina (GTM @ ElevenLabs) on how he negotiated milestone-based equity as the 4th employee building GTM from zero. Why these are the best: employer-gated by definition, squarely in Chris's lane (so he can add a real POV from having carried the bag / built expansion motions), author is senior + well-networked, and comment sections are active. Prioritize this archetype ABOVE product-launch/announcement, milestone, and hiring posts. Strong subject areas: comp/equity negotiation, founding-seller / first-AE grind, building GTM from scratch, expansion & upsell tactics, comp-plan design, GTM org-building, "what I learned selling at [stage]." (Note: this is one great vein, not the only one — keep the broader employer-gated net too.) Search levers: senior GTM/sales/CS leaders at target AI / retail-media / adtech companies posting personal lesson/playbook threads, not corporate updates.

## LinkedIn posts
- When Chris asks for a LinkedIn post to accompany a blog post, put the copy directly in the chat. Do NOT create a doc or file for it.
- Optimize for engagement (the old short-with-a-link format was getting little reach). Target ~1,100–1,500 characters. Keep it native and skimmable — short lines, white space, no markdown.
- Front-load a hard, scroll-stopping hook: only ~140 chars (mobile) show before "see more," so the first line carries the weight.
- Do NOT put the blog link in the body — external links in the post suppress reach. Put the link in the FIRST COMMENT instead.
- End with a genuine question that invites a reply. Comments drive far more reach than likes, so the close should pull people into the thread.
- Use Chris's writing voice (the writing-voice skill) and all the AI-tell rules below.

## Writing — AI tells to avoid (all public-facing writing: blog, LinkedIn, newsletter)
These constructions read as AI-generated. Do not use them; rewrite in plain voice.
- **TITLES/HEADLINES especially (added Jul 2026):** every tell below applies to the title as hard as the body — and titles are where they slip through most, because the two-beat feels "punchy." BANNED in titles: the two-sentence antithesis / "punchy reversal" ("Everyone's automating X. I've spent 15 years doing Y.", "I've sold through six reinventions. They keep killing the same job."), and its cousins "X, not Y" / "X is over. Y is just beginning." Prefer a single-clause, human title — an anecdote ("I closed my best deal four times") or a plain observation ("Six technology shifts later, the same sales job keeps dying"). Before finalizing ANY post, run the title through this list separately from the body. If the two posts in a batch share a rhythm, change one.
- The reversal/negation setup: "you didn't buy a vendor, you bought their politics," "it's not X, it's Y," "this isn't about X, it's about Y." Draw the contrast a plainer way, or just state the point.
- Framing crutches and throat-clearing: "the read is simple," "here's the read," "here's the thing," and the generic "If you sell AI / if you sell X for a living" opener.
- The escalating short-sentence cadence: "X used to be [a nicety]. It's [a Y] now. [Two-word imperative]." (e.g., "That used to be an engineering nicety. It's a sales asset now. Put it on the slide.")
- The "here's the hidden deeper insight" tease — announcing profundity instead of just delivering it: "the more useful number is buried one layer down," "the real story is one layer beneath," "dig a little deeper and," "what's hiding underneath," "the part nobody's talking about is." Just state the point directly (e.g., instead of "the more useful number is buried one layer down," write "MIT also split the failures by who built the thing: …").
- The unearned "honest"/"real"/"truth" framing: "the honest framing is," "the honest version of your pitch is," "the real question is," "truth is." Calling a point "honest" implies someone was being dishonest, and no one was — just state the framing directly (e.g., instead of "the honest framing of build-versus-buy is not whether you can build this," write "Build-versus-buy was never about whether you can build this").
- Forced-casual placeholders that undercut the executive-thought-leader register: "built the thing," "do the thing," "the thing," "make the thing work." Name it precisely instead (the system, the deployment, the model, the workflow). Chris is positioning as a senior thinker, not a casual blogger — keep the register sharp and specific, not trying-too-hard-cool.
- Insider tech/startup jargon ("dogfood," "table stakes," "north star," "0-to-1," "step-change," "flywheel," "rails," "primitives"). Avoid unless it genuinely fits the moment and reads naturally; default to plain English a smart non-specialist would use.
- The "quietly [verb-ing]" insinuation and vague strategic metaphors: "the labs are quietly drawing the map," "quietly rewriting the rules," "quietly placing their bets," "showing their hand," "writing the playbook." State plainly what's actually happening (e.g., instead of "the labs are quietly drawing the map of which sales work is durable," write "their own hiring tells you which sales work lasts").
- Prescriptive framing crutches that tee up the recommendation instead of stating it: "the durable play is," "the smart move is," "the winning play is," "the real opportunity is," "the play here is." Just give the recommendation directly (e.g., instead of "the durable play is getting your brand into the sources models trust," write "Get your brand into the sources models trust").
- Generic label-style subheads: "The read," "The takeaway," "The bottom line," "Why it matters." Use a specific, declarative header that states the actual point, or no header at all — not a filler label.
- Reader-instruction / attention-direction crutches: "This is the part worth studying if you sell any AI product," "Here's the part that matters," "Pay attention to this," "Stay with me here," "Sit with that," "Let that sink in," "Watch what X did next," "Here's what happened next." Also the significance-announcing tee-up: "because it's the template," "this is the playbook," "that's the blueprint." Don't tell the reader what to focus on, how to feel about it, or how important it is, and don't pre-announce that something is significant — just narrate what happened and make the point; the significance should be self-evident.
- **Compute-imperatives (added Aug 2026):** ordering the reader to perform a calculation you are about to perform for them anyway — "Run the arithmetic on that," "Run the math," "Do the math," "Crunch the numbers," "Check the math," "Work out the numbers." Also the tee-up version, "the math is simple / brutal / not complicated," and the comparison-imperative, "put those side by side," "stack that against," "put it next to X." All of these stage a moment of reasoning instead of delivering the result. Just state the number and what it means (e.g., instead of "Run the arithmetic on that. Impressions down a fifth and revenue holding means the rate rose about 25%," write "Impressions down a fifth with revenue flat means the rate on what's left rose about 25%"). Enforced by voice-lint as a HARD ban.
- Coined slogan-abstractions / manufactured catchphrases: clever three-word brandable phrases like "presence without surrender," "borrowed reach, not a home," "trust is the new shelf." They read as LinkedIn-thought-leader packaging rather than how Chris would actually say it. Prefer the plain, concrete statement over the coined slogan (e.g., instead of "Sell presence without surrender," write "Be inside the AI apps, but keep the customer data and the checkout on your side").
- Significance-flagging / knowing-insider tee-ups: "that's the tell," "X is the tell," "the picture is hard to miss," "the pattern is clear," "it's hard to miss," "you can see where this is going," "this is what makes it more than a tuck-in/feature/footnote." These nudge the reader to notice how significant or clever a point is instead of just making it. State the fact plainly and let it carry its own weight.
- Cutesy strategy/sports metaphors used as flourish: "running the same play into the living room," "running the playbook," "the same move on a new field." Say plainly what is happening (e.g., instead of "Walmart is running that play into the living room," write "Walmart is doing the same thing with streaming TV").
- Labeled question/"here's my musing" tee-ups that announce a thought before making it: "One question I keep landing on:", "The thing I keep coming back to:", "Here's what I keep chewing on:", "The question that stays with me is:", "What I keep wrestling with:". BANNED — they're throat-clearing before a question. Just ask the question, or lead in with a plain, human, slightly self-deprecating turn ("The scaling piece is where I get stuck —", "Where I'm less sure:", "Haven't figured out how you'd —", or simply open with the question itself).
- (Plus everything already in the writing-voice skill: em-dash overload, rhythmic triplets, stray "actually/genuinely/simply/truly.")
Note: these live here in project memory because the writing-voice skill can't be edited from a Cowork session. To add them to the skill itself, update it in Settings > Capabilities.

## Who Chris is
Chris Dorsey (ctjdorsey@gmail.com) is a VP-level AI sales leader and GTM advisor based in Denver, CO. He excels at growing revenue from existing accounts — expansion, upsell, deepening strategic partnerships. He is actively job searching as of May 2026 for senior IC roles (no team management) in AI, Retail Media Networks, AdTech/MarTech, and Enterprise SaaS.

**Current focus (updated Jun 2026):** AI and MadTech broadly — NOT GEO specifically. GEO is one slice, not the headline. Frame his POV and expertise around AI/GTM and MadTech generally. **Chris no longer works at FancyAI** — do not reference FancyAI in the present tense or as a current role in his writing, comments, or bio. Draw on past experience generally (Crispin Porter + Bogusky, Oracle, Fastly, Zeta Global) without naming a current employer. Note: his site/profile source files (CHRIS_PROFILE.md, FILL-CHECKLIST.md, site copy) still list FancyAI as "Present" and lean heavily on GEO — flag these for a separate cleanup when he's ready.

**Target role:** Account Director, Strategic Account Manager, Director of Customer Success / Partnerships — senior IC, $250k+ OTE, remote or Denver/Boulder hybrid.

**Wife:** Alexis Atkinson Dorsey. **Diet:** Gluten-free / T3C-friendly.

## Website
- **Site:** chrisdorsey.co (Next.js, deployed on Vercel)
- **Local project:** `/Users/chrisdorsey/Projects/chrisdorsey/`
- **Vercel project ID:** `prj_N0ZpQkPw3mgw48ZVSACiLr2x94q7`
- **Vercel org:** `team_3rapkFQ6wdPMmLtY6BtiRMQn`
- **Deploy (updated Aug 2026): `./publish.sh "commit message"` is the ONLY supported way to publish.** It runs, in order: checkout main + `git pull --rebase` -> `check-post-registry.py` -> `tsc --noEmit` -> `voice-lint.py` on changed posts (prompts y/N on hard bans) -> commit -> push -> polls `chrisdorsey.co/version` up to 5 min and prints LIVE or FAILED. Vercel auto-deploys `main` via the GitHub integration (cdorsey88/chrisdorsey).
- **Do NOT run `vercel --prod` / `vercel --prod --force`.** It uploads the local working tree outside of git and is what caused the live-vs-GitHub drift. There is no manual-deploy fallback; if push fails, fix the push.
- **Cowork/sandbox note:** those sessions can commit but cannot push (no GitHub creds). Chris runs `./publish.sh` from his terminal. The device-bridge mount forbids `unlink`, so git and `next build` fail there — use `Control_your_Mac__osascript` (`do shell script`) instead.
- **Key files:** `app/page.tsx` (homepage), `app/lib/posts-data.ts` (post metadata), `app/writing/posts/<slug>.tsx` (one file per post — full content)
- **Posts architecture (refactored Jul 22 2026):** each post lives in `app/writing/posts/<slug>.tsx` exporting `post: Post`; `app/writing/posts/index.ts` imports them all in display order (newest first) and exports the `posts` array consumed by `app/writing/[slug]/page.tsx`. **To publish a post:** run `python3 scripts/new-post.py <slug> "Post title"` — it creates the `.tsx`, adds the import + array entry to `index.ts`, and adds the metadata stub to `posts-data.ts` in one shot, so the three registration points cannot drift. Fill the TODOs (readTime, tldr, excerpt, content, tag), then `./publish.sh`. Doing it by hand is the #1 cause of "the post did not go live"; `check-post-registry.py` blocks the publish if any of the three is missing. voice-lint now scans only the changed post files.
- **Repo hygiene (Jul 22 2026):** personal/non-site folders were moved OUT of the repo to `~/Documents/Claude/Projects/` (SightedAI → `Projects/SightedAI`, Job Applications → `Projects/Job Search/Applications`, newsletter-drafts/content-queue/cowork-project archive/morning-brief scratch → `Projects/Website Working Files`). Don't recreate working files inside `~/chrisdorsey` — put session outputs in Projects.

## Scheduled tasks
- **morning-briefing** — weekdays 7:30am, emails briefing draft to Gmail
- **daily-job-search** — weekdays 8:08am, saves leads to `/Users/chrisdorsey/Documents/Claude/Job Leads/`
- **site-content-refresh** — 1st & 15th of month, refreshes site content and deploys
- **weekly-meal-plan** — Sundays 8am, emails GF/T3C dinner plan to Gmail
- **weekly-newsletter-draft** — Wednesdays 7am (currently DISABLED), drafts "Ahead of the Curve" newsletter on Beehiiv

## Storage context
- **iCloud:** 1.8 of 2 TB used. Messages retention changed to 1 year (May 2026) — purge in progress.
- **Google Drive:** Cleaned up May 2026. Key files to still delete: Good Fortune folder, wedding video copies.
- Job leads saved to: `/Users/chrisdorsey/Documents/Claude/Projects/Job Search/Leads/` (the old `Documents/Claude/Job Leads/` path in the scheduled morning-briefing task no longer exists — update that task in Settings > Capabilities when convenient)
- For sessions that need the briefing/job-search files: connect `/Users/chrisdorsey/Documents/Claude/Projects` (the parent `Documents/Claude` can't be mounted — it contains a protected `Scheduled` folder)
