const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="monogram" href="#top" aria-label="Junyoung Yang, home">
          JY<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#bio">Bio</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a className="nav-cv" href="/junyoung-yang-cv-public.pdf" download>
            CV <Arrow />
          </a>
        </nav>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> JUNYOUNG YANG · KAIST</p>
          <h1>
            Building agents that
            <span>think, act, and improve.</span>
          </h1>
          <p className="hero-intro">
            I’m an Electrical Engineering and Mathematical Sciences student at KAIST.
            I want to design general-purpose agents that reason across domains, act on
            their environment, and learn from experience—without wasting compute or memory.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#bio">Read my bio <span aria-hidden="true">↓</span></a>
            <a className="button button-quiet" href="mailto:aiden1108@kaist.ac.kr">Let’s talk <Arrow /></a>
          </div>
        </div>

        <aside className="question-card" aria-label="Junyoung's current research question">
          <div className="question-topline">
            <span>THE QUESTION I KEEP RETURNING TO</span>
            <i />
          </div>
          <blockquote>
            How can we build a <em>general agent</em> that keeps getting better through interaction—and stays efficient as it grows?
          </blockquote>
          <div className="question-orbit" aria-hidden="true">
            <span className="q-node q-one">memory</span>
            <span className="q-node q-two">signal</span>
            <span className="q-node q-three">action</span>
            <span className="q-core">?</span>
            <i className="q-line q-line-one" />
            <i className="q-line q-line-two" />
            <i className="q-line q-line-three" />
          </div>
          <div className="question-footer">
            <span>REASON</span><span>ACT</span><span>REMEMBER</span><span>EVOLVE</span>
          </div>
        </aside>

        <div className="hero-footnote">
          <span>Based in Daejeon, Korea</span>
            <span>General · Adaptive · Efficient</span>
          <span>Scroll to explore ↓</span>
        </div>
      </section>

      <section className="about" id="bio">
        <div className="section-shell">
          <div className="section-kicker light-line">
            <span>01 / BIO</span>
            <span>CURIOSITY · RESEARCH · CHALLENGE</span>
          </div>
          <div className="about-lead">
            <p className="side-note">A SHORT INTRODUCTION</p>
            <h2>I’m interested in agents that close the loop between thought and action.</h2>
          </div>
          <div className="about-detail">
            <div className="about-statement">
              <p>
                My research interest is <strong>Agentic AI</strong>: systems that perceive context,
                reason toward a goal, act on their environment, and learn from what happens next.
                I want to design agents that are <strong>general enough to transfer across problems</strong>
                and <strong>efficient enough to work within real limits on memory and computation</strong>.
              </p>
              <p>
                I enjoy stepping into <strong>different domains</strong>, learning how each field works,
                and taking on new kinds of problems. Rather than staying within one application area,
                I want to understand a domain’s own data, constraints, and decision process—then ask
                how an agent could reason and act there. Moving from manufacturing knowledge in GENIUS
                to financial markets in KFAC reflects that curiosity.
              </p>
            </div>
            <div className="principles">
              <div><span>01</span><strong>General by design</strong><p>Look for mechanisms that transfer beyond one task or domain.</p></div>
              <div><span>02</span><strong>Efficient by constraint</strong><p>Treat compute, memory, latency, and data as first-class design choices.</p></div>
              <div><span>03</span><strong>Adaptive by feedback</strong><p>Use outcomes and failures to update the system, not just its answer.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="experience" id="education">
        <div className="section-shell">
          <div className="section-kicker light-line">
            <span>02 / EDUCATION</span>
            <span>KAIST · ELECTRICAL ENGINEERING × MATHEMATICS</span>
          </div>
          <div className="experience-heading">
            <h2>Learning across disciplines,<br />researching beyond boundaries.</h2>
          </div>
          <div className="experience-list">
            <div className="experience-row">
              <span>EDUCATION</span>
              <strong>KAIST</strong>
              <p>B.S. candidate · Electrical Engineering &amp; Mathematical Sciences</p>
              <small>GPA 3.66 / 4.3</small>
            </div>
            <div className="experience-row">
              <span>RESEARCH · 2026</span>
              <strong>VIC Lab · KAIST EE</strong>
              <p>Individual Research · Advised by Prof. Munchurl Kim</p>
              <small>Jan — Mar</small>
            </div>
            <div className="experience-row">
              <span>RESEARCH · 2025</span>
              <strong>CIS Lab · KAIST EE</strong>
              <p>Individual Research · Advised by Prof. Heejin Ahn</p>
              <small>Jan — Mar</small>
            </div>
            <div className="experience-row">
              <span>ACTIVITY · 2023—2025</span>
              <strong>KAIST Hurricane</strong>
              <p>University football club</p>
              <small>Member · 2023—2025 / President · 2025</small>
            </div>
            <div className="experience-row">
              <span>RECOGNITION · 2025</span>
              <strong>ICISTS GRAFFITI</strong>
              <p>AI Startup · Top Prize</p>
              <small>Team project</small>
            </div>
          </div>
          <div className="skills-line">
            <span>PYTHON</span><span>PYTORCH</span><span>C++</span><span>RAG</span>
            <span>AGENT SYSTEMS</span><span>QUANT RESEARCH</span>
          </div>
        </div>
      </section>

      <section className="work section-shell" id="projects">
        <div className="section-kicker dark-line">
          <span>03 / PROJECTS</span>
          <span>TWO DOMAINS · ONE WAY OF THINKING</span>
        </div>
        <div className="work-heading">
          <h2>Selected contributions.</h2>
          <p>Projects where I moved from an ambiguous problem to a system that could be built, measured, and improved.</p>
        </div>

        <article className="project-card genius-card">
          <div className="project-meta">
            <span>01</span>
            <p>PROJECT GENIUS</p>
            <p>Hankook Tire &amp; Technology</p>
            <p>Mar — Aug 2026</p>
          </div>
          <div className="project-main">
            <p className="project-label">MULTIMODAL RAG · AGENTIC MEMORY</p>
            <h3>Turning fragmented factory knowledge into grounded answers.</h3>
            <p className="project-summary">
              Manufacturing manuals hold critical knowledge in text, diagrams, layouts, and video.
              I worked on retrieval and memory designs that preserve those relationships instead of
              flattening them into isolated text chunks.
            </p>
          </div>
          <div className="genius-visual" aria-label="Multimodal knowledge memory architecture">
            <div className="visual-top"><span>RAW EVIDENCE</span><span>AGENT MEMORY</span></div>
            <div className="evidence-stack"><i /><i /><i /><small>TEXT · IMAGE · VIDEO</small></div>
            <div className="visual-flow"><b>→</b><span>retrieve</span></div>
            <div className="memory-stack">
              <span className="memory-agent">AGENT</span>
              <span>ABSTRACT SCHEMA</span>
              <div><i>KNOWLEDGE</i><i>EXPERIENCE</i></div>
              <span>EVIDENCE</span>
            </div>
          </div>
          <div className="contribution-block">
            <p className="project-label">MY CONTRIBUTION</p>
            <ol>
              <li><span>01</span><p>Extended text-only RAG into a vision + text retrieval pipeline for diagrams, layouts, and maintenance procedures.</p></li>
              <li><span>02</span><p>Implemented a lightweight HEAVEN-inspired two-stage search using semantic, BM25, and exact-match signals.</p></li>
              <li><span>03</span><p>Designed a multimodal HyperGraph RAG and Agentic Graph Memory direction for knowledge that evolves through use.</p></li>
            </ol>
          </div>
          <div className="project-results">
            <p className="project-label">RETRIEVAL BENCHMARK</p>
            <div><strong>83%</strong><span>Recall@1</span></div>
            <div><strong>97%</strong><span>Recall@8</span></div>
            <div><strong>0.0021B</strong><span>FLOPs</span></div>
            <small>Measured in the project’s HEAVEN-inspired retrieval evaluation.</small>
          </div>
        </article>

        <article className="project-card quant-card">
          <div className="project-meta">
            <span>02</span>
            <p>KFAC QUANT RESEARCH</p>
            <p>KAIST Finance &amp; Analysis Club</p>
            <p>2026</p>
          </div>
          <div className="project-main">
            <p className="project-label">MARKET STRUCTURE · RL · RISK</p>
            <h3>Finding robust signals in a market full of convincing noise.</h3>
            <p className="project-summary">
              I researched crypto futures through reinforcement learning and principal-component
              analysis. The goal evolved from predicting direction to understanding when the market’s
              common risk factor was safe enough to hold.
            </p>
          </div>
          <div className="quant-visual" aria-label="PC1 market regime research dashboard">
            <div className="quant-topline"><span>PC1 COMMON FACTOR</span><span className="risk-on"><i /> RISK ON</span></div>
            <div className="quant-chart" aria-hidden="true">
              <span className="chart-grid grid-one" /><span className="chart-grid grid-two" /><span className="chart-grid grid-three" />
              <i className="chart-segment seg-one" /><i className="chart-segment seg-two" /><i className="chart-segment seg-three" />
              <i className="chart-segment seg-four" /><i className="chart-segment seg-five" /><i className="chart-segment seg-six" />
              <b className="risk-window window-one" /><b className="risk-window window-two" />
            </div>
            <div className="quant-stats"><span>15 ASSETS</span><span>6H REBALANCE</span><span>FEE-AWARE</span></div>
          </div>
          <div className="contribution-block quant-contribution">
            <p className="project-label">MY CONTRIBUTION</p>
            <ol>
              <li><span>01</span><p>Built a crypto-futures PPO research pipeline with chronological splits, transaction costs, regime penalties, and out-of-sample evaluation.</p></li>
              <li><span>02</span><p>Developed PC1 studies across a 15-asset universe, testing regime persistence, residual signals, walk-forward stability, and placebo baselines.</p></li>
              <li><span>03</span><p>Designed PC1MDDShieldAlpha, then fixed a stale-position artifact and reduced turnover with hysteresis and a fee-aware no-trade band.</p></li>
            </ol>
          </div>
          <div className="project-results quant-results">
            <p className="project-label">FEE-AWARE BACKTEST</p>
            <div><strong>49.0%</strong><span>Total return</span></div>
            <div><strong>0.829</strong><span>Sharpe</span></div>
            <div><strong>-12.0%</strong><span>Max drawdown</span></div>
            <small>Research backtest with 0.05% one-way fees; slippage excluded. Not live performance.</small>
          </div>
          <div className="failure-note">
            <span>WHAT CHANGED MY MIND</span>
            <p>
              Early residual and PPO approaches did not generalize. Rather than hide the negative result,
              I used it to reframe PC1 as a <strong>risk-regime indicator</strong>, not a directional alpha.
            </p>
          </div>
        </article>
      </section>

      <section className="contact" id="contact">
        <div className="section-shell contact-inner">
          <p className="eyebrow light"><span /> START A CONVERSATION</p>
          <h2>Curious minds<br />build better systems.</h2>
          <a className="contact-link" href="mailto:aiden1108@kaist.ac.kr">
            aiden1108@kaist.ac.kr <Arrow />
          </a>
          <div className="contact-footer">
            <span>© 2026 Junyoung Yang</span>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </section>
    </main>
  );
}
