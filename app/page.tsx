export default function Home() {
  return (
    <main>
      <header className="site-header section-shell" id="top">
        <a className="site-name" href="#top">Junyoung Yang</a>
        <nav aria-label="Primary navigation">
          <a href="#bio">Biography</a>
          <a href="#background">Background</a>
          <a href="#projects">Projects</a>
          <a href="/junyoung-yang-cv-public.pdf" download>CV</a>
        </nav>
      </header>

      <div className="section-shell">
        {/* EDIT 1: Name, school, contact, and research interest */}
        <section className="intro" aria-labelledby="name-heading">
          <div className="identity">
            <h1 id="name-heading">Junyoung Yang</h1>
            <p className="role">B.S. student</p>
            <p className="affiliation">Korea Advanced Institute of Science and Technology (KAIST)</p>
            <p className="location">Daejeon, Korea</p>

            <dl className="profile-details">
              <div>
                <dt>Contact</dt>
                <dd><a href="mailto:aiden1108@kaist.ac.kr">aiden1108@kaist.ac.kr</a></dd>
              </div>
              <div>
                <dt>Research Interest</dt>
                <dd>General-purpose and efficient agents that reason, act, and improve across domains.</dd>
              </div>
            </dl>
          </div>

          {/* EDIT 2: Biography */}
          <div className="biography" id="bio">
            <h2>Biography</h2>
            <p className="bio-lead">I’m interested in agents that close the loop between thought and action.</p>
            <p>
              My research interest is <strong>Agentic AI</strong>: systems that perceive context,
              reason toward a goal, act on their environment, and learn from what happens next.
              I want to design agents that are <strong>general enough to transfer across problems</strong>{" "}
              and <strong>efficient enough to work within real limits on memory and computation</strong>.
            </p>
            <p>
              I enjoy stepping into <strong>different domains</strong>, learning how each field works,
              and taking on new kinds of problems. Rather than staying within one application area,
              I want to understand a domain’s own data, constraints, and decision process—then ask
              how an agent could reason and act there. Moving from manufacturing knowledge in GENIUS
              to financial markets in KFAC reflects that curiosity.
            </p>
            <p className="text-links">
              <a href="/junyoung-yang-cv-public.pdf" download>Curriculum Vitae</a>
              <span>/</span>
              <a href="mailto:aiden1108@kaist.ac.kr">Email</a>
            </p>
          </div>
        </section>

        {/* EDIT 3: Education, research, work, activities, awards, and skills */}
        <section className="academic-section" id="background">
          <h2 className="section-title">Background</h2>
          <div className="section-content resume-groups">
            <div className="resume-group">
              <h3>Education</h3>
              <div className="resume-item">
                <div>
                  <strong>Korea Advanced Institute of Science and Technology (KAIST)</strong>
                  <p>B.S. Candidate in Electrical Engineering &amp; Mathematical Sciences</p>
                </div>
              </div>
            </div>

            <div className="resume-group">
              <h3>Research Experience</h3>
              <div className="resume-item">
                <div>
                  <strong>VIC Lab · KAIST EE</strong>
                  <p>Individual Research · Prof. Munchurl Kim</p>
                </div>
                <time>Jan. 2026 – Mar. 2026</time>
              </div>
              <div className="resume-item">
                <div>
                  <strong>CIS Lab · KAIST EE</strong>
                  <p>Individual Research · Prof. Heejin Ahn</p>
                </div>
                <time>Jan. 2025 – Mar. 2025</time>
              </div>
            </div>

            <div className="resume-group">
              <h3>Work Experience</h3>
              <div className="resume-item">
                <div>
                  <strong>Hankook Tire &amp; Technology</strong>
                  <p>KAIST EE Co-op · Project GENIUS Agent Project</p>
                </div>
                <time>Mar. 2026 – Aug. 2026</time>
              </div>
            </div>

            <div className="resume-group">
              <h3>Leadership &amp; Activities</h3>
              <div className="resume-item">
                <div>
                  <strong>KAIST Hurricane</strong>
                  <p>Member · KAIST Football Club · President in 2025</p>
                </div>
                <time>2023 – 2025</time>
              </div>
              <div className="resume-item">
                <div>
                  <strong>KAIST KFAC</strong>
                  <p>Quant Research Team</p>
                </div>
                <time>2026</time>
              </div>
            </div>

            <div className="resume-group">
              <h3>Awards</h3>
              <div className="resume-item">
                <div>
                  <strong>ICISTS GRAFFITI AI Startup</strong>
                  <p>Top Prize</p>
                </div>
                <time>2025</time>
              </div>
            </div>

            <div className="resume-group">
              <h3>Skills &amp; Techniques</h3>
              <p className="skills">Python · PyTorch · RAG · Agent Systems · Quant Research</p>
            </div>
          </div>
        </section>

        {/* EDIT 4: Project GENIUS and KFAC Quant Research */}
        <section className="academic-section" id="projects">
          <h2 className="section-title">Projects</h2>
          <div className="section-content project-list">
            <article className="project-entry">
              <div className="project-heading">
                <div>
                  <span className="project-number">01</span>
                  <h3>Project GENIUS</h3>
                </div>
                <time>Mar. 2026 – Aug. 2026</time>
              </div>
              <p className="project-context">Hankook Tire &amp; Technology · Multimodal RAG · Agentic Memory</p>
              <h4>Turning fragmented factory knowledge into grounded answers.</h4>
              <p>
                Manufacturing manuals hold critical knowledge in text, diagrams, layouts, and video.
                I worked on retrieval and memory designs that preserve those relationships instead of
                flattening them into isolated text chunks.
              </p>
              <h5>My contribution</h5>
              <ol>
                <li>Extended text-only RAG into a vision + text retrieval pipeline for diagrams, layouts, and maintenance procedures.</li>
                <li>Implemented a lightweight HEAVEN-inspired two-stage search using semantic, BM25, and exact-match signals.</li>
                <li>Designed a multimodal HyperGraph RAG and Agentic Graph Memory direction for knowledge that evolves through use.</li>
              </ol>
              <div className="metrics" aria-label="Project GENIUS retrieval benchmark">
                <p><strong>83%</strong><span>Recall@1</span></p>
                <p><strong>97%</strong><span>Recall@8</span></p>
                <p><strong>0.0021B</strong><span>FLOPs</span></p>
              </div>
              <p className="note">Measured in the project’s HEAVEN-inspired retrieval evaluation.</p>
            </article>

            <article className="project-entry">
              <div className="project-heading">
                <div>
                  <span className="project-number">02</span>
                  <h3>KFAC Quant Research</h3>
                </div>
                <time>2026</time>
              </div>
              <p className="project-context">KAIST Finance &amp; Analysis Club · Market Structure · RL · Risk</p>
              <h4>Finding robust signals in a market full of convincing noise.</h4>
              <p>
                I researched crypto futures through reinforcement learning and principal-component
                analysis. The goal evolved from predicting direction to understanding when the market’s
                common risk factor was safe enough to hold.
              </p>
              <h5>My contribution</h5>
              <ol>
                <li>Built a crypto-futures PPO research pipeline with chronological splits, transaction costs, regime penalties, and out-of-sample evaluation.</li>
                <li>Developed PC1 studies across a 15-asset universe, testing regime persistence, residual signals, walk-forward stability, and placebo baselines.</li>
                <li>Designed PC1MDDShieldAlpha, then fixed a stale-position artifact and reduced turnover with hysteresis and a fee-aware no-trade band.</li>
              </ol>
              <div className="metrics" aria-label="KFAC fee-aware backtest">
                <p><strong>49.0%</strong><span>Total return</span></p>
                <p><strong>0.829</strong><span>Sharpe</span></p>
                <p><strong>-12.0%</strong><span>Max drawdown</span></p>
              </div>
              <p className="note">Research backtest with 0.05% one-way fees; slippage excluded. Not live performance.</p>
              <p className="learning">
                <strong>What changed my mind.</strong> Early residual and PPO approaches did not generalize.
                Rather than hide the negative result, I used it to reframe PC1 as a risk-regime indicator,
                not a directional alpha.
              </p>
            </article>
          </div>
        </section>

        <footer className="site-footer">
          <p>© 2026 Junyoung Yang</p>
          <p><a href="mailto:aiden1108@kaist.ac.kr">aiden1108@kaist.ac.kr</a> · <a href="#top">Back to top</a></p>
        </footer>
      </div>
    </main>
  );
}
