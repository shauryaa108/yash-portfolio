import './MarkupLens.css';

function MarkupLens() {
  return (
    <main className="markuplens-page">
      {/* Header */}
      <header className="markuplens-header">
        <a href="/" className="markuplens-back">
          ← Back to portfolio
        </a>

        <span className="markuplens-number">04 / PROJECT</span>
      </header>

      {/* Hero */}
      <section className="markuplens-hero">
        <div className="markuplens-meta">
          <span>SEO / WEB TOOL</span>
          <span>FULL STACK</span>
        </div>

        <div className="markuplens-hero-main">
          <div>
            <h1>
              Markup
              <br />
              Lens
            </h1>

            <p className="markuplens-intro">
              A lightweight website audit tool that analyzes
              webpages for SEO, accessibility, and basic
              performance metrics.
            </p>

            <div className="markuplens-actions">
              <a
                href="https://markuplens-gray.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="markuplens-primary-button"
              >
                Try Live Demo ↗
              </a>

              <a
                href="https://github.com/shauryaa108/MarkupLens"
                target="_blank"
                rel="noopener noreferrer"
                className="markuplens-secondary-button"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* Hero audit visual */}
          <div className="markuplens-audit-preview">
            <div className="audit-preview-header">
              <span>MARKUPLENS / AUDIT</span>
              <span>200 OK</span>
            </div>

            <div className="audit-url">
              <span>URL</span>
              <strong>https://example.com</strong>
            </div>

            <div className="audit-metrics">
              <div>
                <span>TITLE</span>
                <strong>✓</strong>
              </div>

              <div>
                <span>META</span>
                <strong>✓</strong>
              </div>

              <div>
                <span>H1</span>
                <strong>02</strong>
              </div>

              <div>
                <span>ALT</span>
                <strong>01</strong>
              </div>

              <div>
                <span>WORDS</span>
                <strong>1423</strong>
              </div>

              <div>
                <span>TIME</span>
                <strong>184ms</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="markuplens-hero-line" />
      </section>

      {/* Overview */}
      <section className="markuplens-section">
        <div className="markuplens-label">
          <span>01</span>
          <span>OVERVIEW</span>
        </div>

        <div className="markuplens-content">
          <h2>
            Give a webpage
            <br />
            a closer look.
          </h2>

          <p>
            MarkupLens allows a user to enter any publicly
            accessible website URL and receive a structured
            audit of the page.
          </p>

          <p>
            The backend fetches the complete HTML document and
            its metadata, parses the document, and extracts
            information that can help identify common SEO and
            accessibility issues.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="markuplens-dark">
        <div className="markuplens-section">
          <div className="markuplens-label">
            <span>02</span>
            <span>HOW IT WORKS</span>
          </div>

          <div className="markuplens-content">
            <h2>
              URL in.
              <br />
              Audit out.
            </h2>

            <p>
              The application keeps the workflow simple. The
              frontend sends a URL to the backend, where the
              webpage is fetched and analyzed before the results
              are returned to the user.
            </p>

            <div className="markuplens-flow">
              <div className="markuplens-flow-step">
                <span>01</span>
                <strong>Enter URL</strong>
                <p>
                  The user provides a publicly accessible
                  webpage URL.
                </p>
              </div>

              <div className="markuplens-flow-arrow">→</div>

              <div className="markuplens-flow-step">
                <span>02</span>
                <strong>Fetch HTML</strong>
                <p>
                  Express receives the request and Axios
                  fetches the webpage.
                </p>
              </div>

              <div className="markuplens-flow-arrow">→</div>

              <div className="markuplens-flow-step">
                <span>03</span>
                <strong>Parse</strong>
                <p>
                  Cheerio parses the HTML document and
                  exposes its structure.
                </p>
              </div>

              <div className="markuplens-flow-arrow">→</div>

              <div className="markuplens-flow-step">
                <span>04</span>
                <strong>Analyze</strong>
                <p>
                  SEO, accessibility and basic performance
                  information is extracted.
                </p>
              </div>

              <div className="markuplens-flow-arrow">→</div>

              <div className="markuplens-flow-step">
                <span>05</span>
                <strong>Report</strong>
                <p>
                  The frontend presents the audit results
                  in a dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What it checks */}
      <section className="markuplens-feature-section">
        <div className="markuplens-section">
          <div className="markuplens-label">
            <span>03</span>
            <span>WHAT IT CHECKS</span>
          </div>

          <div className="markuplens-content">
            <h2>
              A small set of
              <br />
              useful signals.
            </h2>

            <div className="markuplens-features">
              <div>
                <span>01</span>
                <h3>Page Title</h3>
                <p>
                  Extracts the title element from the
                  webpage.
                </p>
              </div>

              <div>
                <span>02</span>
                <h3>Meta Description</h3>
                <p>
                  Checks and extracts the page's meta
                  description.
                </p>
              </div>

              <div>
                <span>03</span>
                <h3>H1 Structure</h3>
                <p>
                  Counts H1 elements to provide a basic
                  structural signal.
                </p>
              </div>

              <div>
                <span>04</span>
                <h3>Image ALT</h3>
                <p>
                  Detects images that are missing ALT
                  attributes.
                </p>
              </div>

              <div>
                <span>05</span>
                <h3>Word Count</h3>
                <p>
                  Provides the approximate amount of text
                  present on the page.
                </p>
              </div>

              <div>
                <span>06</span>
                <h3>Response Time</h3>
                <p>
                  Measures how long the webpage takes to
                  respond to the request.
                </p>
              </div>

              <div>
                <span>07</span>
                <h3>HTTP Status</h3>
                <p>
                  Reports the HTTP status received from
                  the target webpage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="markuplens-section">
        <div className="markuplens-label">
          <span>04</span>
          <span>ARCHITECTURE</span>
        </div>

        <div className="markuplens-content">
          <h2>
            Simple architecture.
            <br />
            Focused responsibility.
          </h2>

          <div className="markuplens-architecture">
            <div className="architecture-node">
              <span>CLIENT</span>
              <strong>React + Axios</strong>
              <p>
                Accepts the URL and displays the audit.
              </p>
            </div>

            <div className="architecture-connector">
              POST /api/v1/audit →
            </div>

            <div className="architecture-node">
              <span>SERVER</span>
              <strong>Node.js + Express</strong>
              <p>
                Handles the audit request and coordinates
                the analysis.
              </p>
            </div>

            <div className="architecture-connector">
              ↓
            </div>

            <div className="architecture-node architecture-wide">
              <span>ANALYSIS</span>
              <strong>Axios + Cheerio</strong>
              <p>
                Fetches the target HTML, parses the document,
                and extracts SEO, accessibility, and basic
                performance information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API */}
      <section className="markuplens-dark">
        <div className="markuplens-section">
          <div className="markuplens-label">
            <span>05</span>
            <span>API</span>
          </div>

          <div className="markuplens-content">
            <h2>
              One endpoint
              <br />
              does the heavy lifting.
            </h2>

            <div className="markuplens-api-card">
              <div className="api-top">
                <span>POST</span>
                <code>/api/v1/audit</code>
              </div>

              <div className="api-code">
                <span>// request</span>

                <code>
                  {'{'}
                  <br />
                  &nbsp;&nbsp;"url":
                  "https://github.com"
                  <br />
                  {'}'}
                </code>
              </div>

              <div className="api-divider" />

              <div className="api-code">
                <span>// response</span>

                <code>
                  {'{'}
                  <br />
                  &nbsp;&nbsp;"status": 200,
                  <br />
                  &nbsp;&nbsp;"responseTime": 184,
                  <br />
                  &nbsp;&nbsp;"title": "...",
                  <br />
                  &nbsp;&nbsp;"metaDescription": "...",
                  <br />
                  &nbsp;&nbsp;"h1Count": 2,
                  <br />
                  &nbsp;&nbsp;"missingAlt": 1,
                  <br />
                  &nbsp;&nbsp;"wordCount": 1423
                  <br />
                  {'}'}
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="markuplens-section">
        <div className="markuplens-label">
          <span>06</span>
          <span>TECH STACK</span>
        </div>

        <div className="markuplens-content">
          <h2>What it is built with.</h2>

          <div className="markuplens-stack">
            <span>React</span>
            <span>Vite</span>
            <span>CSS3</span>
            <span>Axios</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>Cheerio</span>
          </div>
        </div>
      </section>

      {/* Learning */}
      <section className="markuplens-learning">
        <div className="markuplens-section">
          <div className="markuplens-label">
            <span>07</span>
            <span>WHAT I LEARNED</span>
          </div>

          <div className="markuplens-content">
            <h2>
              Small project,
              <br />
              useful lessons.
            </h2>

            <p>
              MarkupLens gave me practical experience in building
              a complete full-stack workflow around a relatively
              simple problem.
            </p>

            <p>
              I worked with REST API design, React state
              management, Express architecture, external HTTP
              requests, HTML parsing with Cheerio, and the
              separation of responsibilities between the client
              and server.
            </p>

            <div className="markuplens-learning-grid">
              <div>
                <span>01</span>
                Full-stack application development
              </div>

              <div>
                <span>02</span>
                REST API design
              </div>

              <div>
                <span>03</span>
                HTML parsing with Cheerio
              </div>

              <div>
                <span>04</span>
                External API integration
              </div>

              <div>
                <span>05</span>
                React state management
              </div>

              <div>
                <span>06</span>
                Backend project structure
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="markuplens-footer">
        <div>
          <span>04 / MARKUPLENS</span>
        </div>

        <div className="markuplens-footer-links">
          <a
            href="YOUR_LIVE_DEMO_URL"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo ↗
          </a>

          <a
            href="YOUR_GITHUB_URL"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <a href="/">Back to portfolio ↗</a>
        </div>
      </footer>
    </main>
  );
}

export default MarkupLens;