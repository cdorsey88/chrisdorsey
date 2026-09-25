import type { Post } from "./types";

export const post: Post = {
  slug: "pentagon-ai-report-data-label",
  title: "The Pentagon's AI report was missing a data label",
  date: "Sep 25, 2026",
  readTime: "4 min",
  tag: "AI",
  color: "from-slate-700 to-blue-600",
  tldr: "A special operations analyst asked a chatbot about a Chinese ship's manifest. The chatbot wrongly decided the cargo included nuclear weapons components, and a second pass through AI turned that guess into a formal intelligence report. Troops suited up and planes launched before anyone checked the sourcing. Ad tech has required a label for this exact problem for years: every audience segment has to say whether it was observed, declared, inferred, or modeled. If your team is running decisions off AI-written briefs, put that label on them now.",
  content: (
    <div className="prose-content">
      <p>
        This spring, a U.S. special operations analyst had a question about a Chinese ship in the Middle East, so the analyst asked a chatbot. The chatbot mixed open-source reporting with classified signals intelligence and concluded the ship was carrying components for a nuclear weapons program. Then the analyst used AI again to write that conclusion up as a standard intelligence report, and the report went out across the military.
      </p>
      <p>
        According to <a target="_blank" rel="noopener noreferrer" href="https://www.cnn.com/2026/09/18/politics/us-military-ai-false-intelligence-china-ship">CNN&rsquo;s exclusive</a>, armed personnel were getting ready to board the ship and planes were already in the air before officials went back to the sourcing and found the problem. One source called the report &ldquo;entirely false.&rdquo; Another said it &ldquo;almost started a war.&rdquo;
      </p>
      <p>
        Most of the coverage has focused on the chatbot getting the cargo wrong. I think the second AI step was worse. The first step produced a bad guess. The second step took that guess and formatted it like every finished intelligence product the chain of command reads each day, which is exactly the format people are trained to trust.
      </p>
      <h2>Ad tech already fought about this</h2>
      <p>
        When I sold data at Oracle Advertising, the smart buyers asked one question before they asked about price: how do you know? A segment called &ldquo;in-market for an SUV&rdquo; could mean someone who built a Tahoe on a dealer&rsquo;s configurator last Tuesday. It could also mean someone whose zip code, age, and magazine subscriptions looked a lot like people who bought SUVs a few years ago. Same name in the taxonomy. Very different product. Only the first one describes something a person did.
      </p>
      <p>
        The industry eventually made sellers write the difference down. The IAB Tech Lab&rsquo;s Data Transparency Standard, the &ldquo;nutrition label&rdquo; for audience data, includes a field called <a target="_blank" rel="noopener noreferrer" href="https://iabtechlab.com/wp-content/uploads/2024/04/IAB-TL-Data-Transparency-Disclosure-Schema-1.2-Privacy-Update.pdf">Data Inclusion Methodology</a>. The allowed answers are Observed/Known, Declared, Inferred, Derived, or Modeled. Other fields cover where the data came from, how often the segment refreshes, and whether it was padded out with lookalikes. Companies that want the compliance seal go through an <a target="_blank" rel="noopener noreferrer" href="https://iabtechlab.com/standards/data-transparency-standard/">annual audit</a>{" "}to prove the labels are accurate.
      </p>
      <p>
        That&rsquo;s a lot of paperwork to protect a CPM. The worst outcome of a mislabeled segment is a car ad served to someone who takes the bus.
      </p>
      <h2>Nobody reading the report could tell what was a guess</h2>
      <p>
        Read the CNN account again with that label in mind. The chatbot started from reporting on the manifest that originated with U.S. Special Operations Command Pacific and fused it with other sources. On the IAB&rsquo;s scale, its conclusion was Inferred at best. Then the formatting pass removed the one signal a reader needed. Once the output looked like every other report in the queue, nobody downstream had a reason to ask whether the nuclear claim came from something a person observed or from a model connecting dots.
      </p>
      <p>
        The tool itself wasn&rsquo;t going to save anyone. A former senior U.S. official told CNN that the military&rsquo;s internal AI tools are &ldquo;mostly just copies of the commercial stuff wearing lipstick.&rdquo;
      </p>
      <p>
        The pressure to move fast is real and on the record. The Pentagon&rsquo;s <a target="_blank" rel="noopener noreferrer" href="https://media.defense.gov/2026/Jan/12/2003855671/-1/-1/0/ARTIFICIAL-INTELLIGENCE-STRATEGY-FOR-THE-DEPARTMENT-OF-WAR.PDF">AI strategy</a>, released in January, calls for an &ldquo;AI-first&rdquo; force operating at &ldquo;wartime speed,&rdquo; and CNN reported the push is meant to put AI models &ldquo;directly in the hands&rdquo; of three million civilian and military personnel. Moving fast with AI is a defensible call. I&rsquo;d make it too. What I&rsquo;d change first is handing three million people a tool that writes finished-looking reports with no required field for how the conclusions were reached.
      </p>
      <p>
        Credit where it&rsquo;s due: somebody checked the sourcing before anyone set foot on that ship. That check is the whole ballgame, and it happened a lot later than anyone should be comfortable with.
      </p>
      <h2>Your team is doing the same thing with lower stakes</h2>
      <p>
        You&rsquo;re not boarding ships. But look at what your team produced with AI this week. Call recaps land in the CRM as &ldquo;the customer said,&rdquo; and account research shows up in a QBR deck with a competitor&rsquo;s pricing that came from who knows where. Each one starts as a model&rsquo;s inference and ends as a clean document your VP forwards without a second look.
      </p>
      <p>
        This is already normal behavior. <a target="_blank" rel="noopener noreferrer" href="https://kpmg.com/xx/en/media/press-releases/2025/04/trust-of-ai-remains-a-critical-challenge.html">KPMG and the University of Melbourne</a>{" "}surveyed more than 48,000 people in 47 countries and found 66% of employees rely on AI output without evaluating its accuracy. And 57% say they hide their AI use and present AI-generated work as their own. That second number is the analyst&rsquo;s formatting step, repeated across the workforce.
      </p>
      <p>
        So steal the data label. Any AI-assisted document that&rsquo;s going to drive a decision gets one line at the top that says which claims were observed (someone saw it, a system logged it, a customer said it on a recorded call) and which ones the AI inferred or modeled. It takes about ten seconds to write. It also gives the person reading it cover to ask &ldquo;how do you know?&rdquo; before they act, and that question is what stopped the boarding party.
      </p>
      <p>
        If you sell AI tools, expect buyers who&rsquo;ve been burned to start asking for provenance in the demo. Build the label into the product before procurement writes it into the RFP.
      </p>
      <p>
        The ad industry built an audited label so nobody would waste a CPM on the wrong audience. A report that put warplanes in the air deserved at least the same paperwork.
      </p>
    </div>
  ),
  sources: [
    { title: "CNN: US military had close call after using AI for false intelligence report (Sept 18, 2026)", url: "https://www.cnn.com/2026/09/18/politics/us-military-ai-false-intelligence-china-ship" },
    { title: "Department of War: Artificial Intelligence Strategy (Jan 2026)", url: "https://media.defense.gov/2026/Jan/12/2003855671/-1/-1/0/ARTIFICIAL-INTELLIGENCE-STRATEGY-FOR-THE-DEPARTMENT-OF-WAR.PDF" },
    { title: "IAB Tech Lab: Data Transparency Standard 1.2 disclosure schema", url: "https://iabtechlab.com/wp-content/uploads/2024/04/IAB-TL-Data-Transparency-Disclosure-Schema-1.2-Privacy-Update.pdf" },
    { title: "IAB Tech Lab: Data Transparency Standard and compliance program", url: "https://iabtechlab.com/standards/data-transparency-standard/" },
    { title: "KPMG / University of Melbourne: Trust, attitudes and use of AI, global study 2025", url: "https://kpmg.com/xx/en/media/press-releases/2025/04/trust-of-ai-remains-a-critical-challenge.html" },
  ],
};
