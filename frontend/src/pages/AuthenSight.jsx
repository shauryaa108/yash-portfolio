import './AuthenSight.css';

function AuthenSight() {
  return (
    <main className="auth-page">

      {/* ───────────────── HEADER ───────────────── */}

      <header className="auth-header">
        <div className="auth-topbar">
          <p className="auth-eyebrow">PROJECT / 01</p>

          <a href="/" className="auth-back">
            ← Back to portfolio
          </a>
        </div>

        <div className="auth-title-area">
          <p className="auth-category">AI / COMPUTER VISION / WEB</p>

          <h1>
            AuthenSight
            <br />
            AI
          </h1>

          <div className="auth-intro">
            <p>
              A deepfake detection system designed to reason about
              the authenticity of images and videos in the era of AI.
            </p>

            <div className="auth-header-links">
              <a
                href="https://github.com/shauryaa108/AuthenSight-AI"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </header>


      {/* ───────────────── HERO ───────────────── */}

      <section className="auth-hero">
        <div className="auth-hero-content">
          <span className="auth-hero-label">AUTHENTICITY / 01</span>

          <div className="auth-hero-word">
            REAL?
          </div>

          <div className="auth-hero-bottom">
            <span>IMAGE</span>
            <span>VIDEO</span>
            <span>AI</span>
          </div>
        </div>
      </section>


      {/* ───────────────── PROBLEM ───────────────── */}

      <section className="auth-section">
        <div className="auth-section-label">
          <span>01</span>
          <p>THE PROBLEM</p>
        </div>

        <div className="auth-section-content">
          <h2>
            In the era of AI,
            <br />
            seeing isn't always believing.
          </h2>

          <p>
            AI-generated and manipulated images and videos are becoming
            increasingly difficult to distinguish from authentic content.
            As synthetic media becomes more accessible, being able to
            reason about the authenticity of visual content becomes an
            increasingly important problem.
          </p>

          <p>
            AuthenSight AI was built to explore this problem by creating
            a practical system that can analyze visual content and provide
            a prediction about whether it is likely to be real or fake.
          </p>
        </div>
      </section>


      {/* ───────────────── WHY ───────────────── */}

      <section className="auth-section auth-dark-section">
        <div className="auth-section-label">
          <span>02</span>
          <p>WHY WE BUILT IT</p>
        </div>

        <div className="auth-section-content">
          <h2>
            We wanted to build
            <br />
            something that questions
            <br />
            what we see.
          </h2>

          <p>
            AuthenSight AI was developed during a hackathon at IIIT Una.
            We wanted to combine machine learning with a real-world
            problem and build something that could go beyond simply
            running a model in isolation.
          </p>

          <p>
            The goal was not to create a perfect forensic detector.
            Instead, we wanted to build a system that could provide
            an additional signal to help users reason about the
            authenticity of visual content.
          </p>
        </div>
      </section>


      {/* ───────────────── HOW IT WORKS ───────────────── */}

      <section className="auth-section">
        <div className="auth-section-label">
          <span>03</span>
          <p>HOW IT WORKS</p>
        </div>

        <div className="auth-section-content">
          <h2>
            From uploaded media
            <br />
            to a prediction.
          </h2>

          <div className="auth-process">

            <div className="auth-process-item">
              <div className="auth-process-number">01</div>

              <div>
                <h3>Upload</h3>
                <p>
                  The user provides an image or video as input to
                  the application.
                </p>
              </div>
            </div>

            <div className="auth-process-item">
              <div className="auth-process-number">02</div>

              <div>
                <h3>Process</h3>
                <p>
                  The uploaded media is processed to extract the
                  relevant facial regions. For videos, individual
                  frames are sampled for analysis.
                </p>
              </div>
            </div>

            <div className="auth-process-item">
              <div className="auth-process-number">03</div>

              <div>
                <h3>Inference</h3>
                <p>
                  The extracted input is passed through a ResNet-based
                  deepfake detection model running through the
                  FastAPI inference service.
                </p>
              </div>
            </div>

            <div className="auth-process-item">
              <div className="auth-process-number">04</div>

              <div>
                <h3>Prediction</h3>
                <p>
                  The model generates a prediction and confidence
                  score indicating whether the analyzed content is
                  likely to be real or fake.
                </p>
              </div>
            </div>

            <div className="auth-process-item">
              <div className="auth-process-number">05</div>

              <div>
                <h3>Present</h3>
                <p>
                  The response is parsed and transformed into a
                  cleaner, understandable result for the user.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ───────────────── ARCHITECTURE ───────────────── */}

      <section className="auth-section auth-architecture-section">
        <div className="auth-section-label">
          <span>04</span>
          <p>ARCHITECTURE</p>
        </div>

        <div className="auth-section-content">
          <h2>
            Separate the interface
            <br />
            from the intelligence.
          </h2>

          <p>
            The system separates the frontend, API layer, and machine
            learning inference service. This keeps the ML model
            independent from the main application layer.
          </p>

          <div className="auth-architecture">

            <div className="auth-architecture-node">
              <span>01</span>
              <strong>React</strong>
              <small>Frontend</small>
            </div>

            <div className="auth-architecture-arrow">
              →
            </div>

            <div className="auth-architecture-node">
              <span>02</span>
              <strong>Express.js</strong>
              <small>API Layer</small>
            </div>

            <div className="auth-architecture-arrow">
              →
            </div>

            <div className="auth-architecture-node">
              <span>03</span>
              <strong>FastAPI</strong>
              <small>Inference Service</small>
            </div>

            <div className="auth-architecture-arrow">
              →
            </div>

            <div className="auth-architecture-node">
              <span>04</span>
              <strong>PyTorch</strong>
              <small>ResNet Model</small>
            </div>

          </div>
        </div>
      </section>


      {/* ───────────────── TECH STACK ───────────────── */}

      <section className="auth-section">
        <div className="auth-section-label">
          <span>05</span>
          <p>TECH STACK</p>
        </div>

        <div className="auth-section-content">
          <h2>
            Built across
            <br />
            multiple layers.
          </h2>

          <div className="auth-tech-grid">

            <div className="auth-tech-card">
              <span>01 / MACHINE LEARNING</span>

              <h3>PyTorch</h3>
              <h3>ResNet</h3>
              <h3>OpenCV</h3>
            </div>

            <div className="auth-tech-card">
              <span>02 / BACKEND</span>

              <h3>FastAPI</h3>
              <h3>Express.js</h3>
              <h3>REST APIs</h3>
            </div>

            <div className="auth-tech-card">
              <span>03 / FRONTEND</span>

              <h3>React.js</h3>
            </div>

          </div>
        </div>
      </section>


      {/* ───────────────── USE CASES ───────────────── */}

      <section className="auth-section auth-dark-section">
        <div className="auth-section-label">
          <span>06</span>
          <p>USE CASES</p>
        </div>

        <div className="auth-section-content">
          <h2>
            Where could this
            <br />
            actually be useful?
          </h2>

          <div className="auth-usecases">

            <div>
              <span>01</span>
              <p>Content verification</p>
            </div>

            <div>
              <span>02</span>
              <p>Digital media analysis</p>
            </div>

            <div>
              <span>03</span>
              <p>Research & experimentation</p>
            </div>

            <div>
              <span>04</span>
              <p>Educational applications</p>
            </div>

          </div>
        </div>
      </section>


      {/* ───────────────── LIMITATIONS ───────────────── */}

      <section className="auth-section">
        <div className="auth-section-label">
          <span>07</span>
          <p>LIMITATIONS</p>
        </div>

        <div className="auth-section-content">
          <h2>
            A useful signal,
            <br />
            not absolute truth.
          </h2>

          <p>
            AuthenSight AI is not 100% accurate and should not be
            treated as a definitive forensic system.
          </p>

          <p>
            The model used in the project was a freely available
            pretrained model, which makes its predictions less
            reliable across different types of media and manipulation.
          </p>

          <p>
            Performance can also depend on the quality of facial
            extraction. Poor lighting, unusual angles, low-resolution
            media, or difficult facial poses can affect the result.
          </p>

          <p>
            Video detection is also based on sampled frames rather
            than complete temporal modeling, which limits the system's
            ability to identify certain types of manipulation.
          </p>

          <div className="auth-limitation-note">
            <span>THE TAKEAWAY</span>

            <p>
              AuthenSight AI provides an additional signal about
              authenticity — it does not provide an absolute verdict.
            </p>
          </div>
        </div>
      </section>


      {/* ───────────────── MY CONTRIBUTION ───────────────── */}

      <section className="auth-section auth-contribution-section">
        <div className="auth-section-label">
          <span>08</span>
          <p>MY CONTRIBUTION</p>
        </div>

        <div className="auth-section-content">
          <h2>
            Building the bridge
            <br />
            between the user and the model.
          </h2>

          <p>
            I worked on the React frontend and Express.js backend,
            connecting the user-facing application to the machine
            learning inference pipeline.
          </p>

          <p>
            My work involved handling communication between the
            application and the inference service and turning the
            model's responses into something understandable for
            the end user.
          </p>
        </div>
      </section>


      {/* ───────────────── TEAM ───────────────── */}

      <section className="auth-section">
        <div className="auth-section-label">
          <span>09</span>
          <p>TEAM</p>
        </div>

        <div className="auth-section-content">
          <h2>
            Built together
            <br />
            at IIIT Una.
          </h2>

          <div className="auth-team">

            <div>
              <strong>Rishik</strong>
              <span>ML & FastAPI</span>
            </div>

            <div>
              <strong>Yash</strong>
              <span>React & Express.js</span>
            </div>

            <div>
              <strong>Aman</strong>
              <span>React & Express.js</span>
            </div>

          </div>
        </div>
      </section>


      {/* ───────────────── FOOTER ───────────────── */}

      <footer className="auth-footer">

        <p className="auth-eyebrow">
          PROJECT / 01
        </p>

        <h2>
          Want to see
          <br />
          the code?
        </h2>

        <a
          href="https://github.com/shauryaa108/AuthenSight-AI"
          target="_blank"
          rel="noopener noreferrer"
          className="auth-github-button"
        >
          View on GitHub <span>↗</span>
        </a>

        <a href="/" className="auth-footer-back">
          ← Back to projects
        </a>

      </footer>

    </main>
  );
}

export default AuthenSight;