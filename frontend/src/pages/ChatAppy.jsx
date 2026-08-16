import './ChatAppy.css';

function ChatAppy() {
  return (
    <main className="chatappy-page">

      {/* ───────────────── HEADER ───────────────── */}

      <header className="chatappy-header">
        <div className="chatappy-topbar">
          <p className="chatappy-eyebrow">PROJECT / 02</p>

          <a href="/" className="chatappy-back">
            ← Back to portfolio
          </a>
        </div>

        <div className="chatappy-title-area">
          <p className="chatappy-category">
            REAL-TIME / BACKEND / WEB
          </p>

          <h1>
            Chat
            <br />
            Appy
          </h1>

          <div className="chatappy-intro">
            <p>
              A real-time chat application built to learn and experiment
              with Socket.IO, persistent connections, and server-driven
              communication.
            </p>

            <a
              href="https://github.com/shauryaa108/ChatAppy"
              target="_blank"
              rel="noopener noreferrer"
              className="chatappy-github"
            >
              GitHub <span>↗</span>
            </a>
          </div>
        </div>
      </header>


      {/* ───────────────── HERO ───────────────── */}

      <section className="chatappy-hero">
        <div className="chatappy-hero-inner">

          <div className="chatappy-hero-label">
            <span>REAL-TIME COMMUNICATION</span>
            <span>SOCKET.IO</span>
          </div>

          <div className="chatappy-terminal">

            <div className="chatappy-terminal-head">
              <i />
              <i />
              <i />
            </div>

            <div className="chatappy-terminal-body">
              <p>
                <b>$</b> connect client
              </p>

              <p className="chatappy-terminal-muted">
                socket connected
              </p>

              <p>
                <b>→</b> user joined
              </p>

              <p>
                <b>→</b> message received
              </p>

              <p>
                <b>→</b> broadcast to clients
              </p>

              <p>
                <b>$</b> <span className="chatappy-cursor" />
              </p>
            </div>

          </div>

          <div className="chatappy-hero-bottom">
            <span>CLIENT</span>
            <span>↔</span>
            <span>SERVER</span>
          </div>

        </div>
      </section>


      {/* ───────────────── IDEA ───────────────── */}

      <section className="chatappy-section">

        <div className="chatappy-section-label">
          <span>01</span>
          <p>THE IDEA</p>
        </div>

        <div className="chatappy-section-content">

          <h2>
            HTTP asks.
            <br />
            Sockets stay connected.
          </h2>

          <p>
            ChatAppy started as a simple chat application, but the real
            purpose behind it was learning how real-time communication
            actually works.
          </p>

          <p>
            Instead of relying on the traditional request → response
            model for every interaction, I wanted to understand how
            clients could maintain a connection with a server and
            communicate through events.
          </p>

        </div>

      </section>


      {/* ───────────────── WHY ───────────────── */}

      <section className="chatappy-section chatappy-dark">

        <div className="chatappy-section-label">
          <span>02</span>
          <p>WHY I BUILT IT</p>
        </div>

        <div className="chatappy-section-content">

          <h2>
            I wanted to understand
            <br />
            what happens between
            <br />
            two connected clients.
          </h2>

          <p>
            Socket-based communication is fundamentally different from
            the request-response patterns used in traditional REST APIs.
          </p>

          <p>
            Building a small chat application gave me a practical way
            to experiment with socket connections, events, connection
            lifecycle, message delivery, and communication between
            multiple clients.
          </p>

        </div>

      </section>


      {/* ───────────────── HOW IT WORKS ───────────────── */}

      <section className="chatappy-section">

        <div className="chatappy-section-label">
          <span>03</span>
          <p>HOW IT WORKS</p>
        </div>

        <div className="chatappy-section-content">

          <h2>
            A persistent connection
            <br />
            between client and server.
          </h2>

          <div className="chatappy-flow">

            <div className="chatappy-flow-node">
              <span>01</span>
              <strong>Client</strong>
              <small>Browser / User</small>
            </div>

            <div className="chatappy-flow-arrow">
              →
            </div>

            <div className="chatappy-flow-node chatappy-flow-highlight">
              <span>02</span>
              <strong>Socket.IO</strong>
              <small>Real-time layer</small>
            </div>

            <div className="chatappy-flow-arrow">
              →
            </div>

            <div className="chatappy-flow-node">
              <span>03</span>
              <strong>Server</strong>
              <small>Node.js</small>
            </div>

          </div>

          <p className="chatappy-flow-description">
            Once the socket connection is established, clients can
            emit events to the server and the server can broadcast
            events back to connected clients.
          </p>

        </div>

      </section>


      {/* ───────────────── SOCKET EVENTS ───────────────── */}

      <section className="chatappy-section chatappy-event-section">

        <div className="chatappy-section-label">
          <span>04</span>
          <p>EVENT-DRIVEN COMMUNICATION</p>
        </div>

        <div className="chatappy-section-content">

          <h2>
            Communication happens
            <br />
            through events.
          </h2>

          <div className="chatappy-events">

            <div className="chatappy-event">
              <span>01</span>

              <div>
                <h3>Connection</h3>
                <p>
                  A client establishes a socket connection with
                  the server.
                </p>
              </div>
            </div>

            <div className="chatappy-event">
              <span>02</span>

              <div>
                <h3>Message</h3>
                <p>
                  A client emits a message event containing the
                  message data.
                </p>
              </div>
            </div>

            <div className="chatappy-event">
              <span>03</span>

              <div>
                <h3>Broadcast</h3>
                <p>
                  The server receives the event and communicates
                  the message to the relevant connected clients.
                </p>
              </div>
            </div>

            <div className="chatappy-event">
              <span>04</span>

              <div>
                <h3>Disconnect</h3>
                <p>
                  When a client leaves or loses its connection,
                  the server handles the socket lifecycle accordingly.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* ───────────────── SECURITY ───────────────── */}

      <section className="chatappy-section chatappy-dark">

        <div className="chatappy-section-label">
          <span>05</span>
          <p>RATE LIMITING</p>
        </div>

        <div className="chatappy-section-content">

          <h2>
            Real-time doesn't mean
            <br />
            unlimited.
          </h2>

          <p>
            Since real-time applications can receive a large number
            of requests and events, rate limiting is an important
            part of protecting the application.
          </p>

          <p>
            ChatAppy uses <strong>Arcjet</strong> to implement
            rate limiting and control excessive requests.
          </p>

          <div className="chatappy-security-card">

            <div>
              <span>PROTECTION</span>
              <strong>Arcjet</strong>
            </div>

            <div>
              <span>ROLE</span>
              <strong>Rate Limiting</strong>
            </div>

          </div>

        </div>

      </section>


      {/* ───────────────── EMAIL ───────────────── */}

      <section className="chatappy-section">

        <div className="chatappy-section-label">
          <span>06</span>
          <p>EMAIL SERVICE</p>
        </div>

        <div className="chatappy-section-content">

          <h2>
            Connecting the application
            <br />
            to external services.
          </h2>

          <p>
            I also experimented with integrating an email workflow
            using <strong>Resend</strong>, allowing the application
            to trigger email communication after login.
          </p>

          <p>
            The workflow works with a verified personal email
            configuration. During deployment, sender-domain
            verification required DNS configuration that wasn't
            available in the free setup I was using.
          </p>

          <div className="chatappy-email-note">
            <span>EXPERIMENT</span>

            <p>
              The goal was not just to send an email, but to understand
              how an external service fits into a backend application.
            </p>
          </div>

        </div>

      </section>


      {/* ───────────────── TECH STACK ───────────────── */}

      <section className="chatappy-section chatappy-stack-section">

        <div className="chatappy-section-label">
          <span>07</span>
          <p>TECH STACK</p>
        </div>

        <div className="chatappy-section-content">

          <h2>
            Small stack.
            <br />
            Lots to learn.
          </h2>

          <div className="chatappy-tech-grid">

            <div className="chatappy-tech-card">
              <span>01 / FRONTEND</span>
              <h3>React</h3>
            </div>

            <div className="chatappy-tech-card">
              <span>02 / BACKEND</span>
              <h3>Node.js</h3>
            </div>

            <div className="chatappy-tech-card">
              <span>03 / REAL-TIME</span>
              <h3>Socket.IO</h3>
            </div>

            <div className="chatappy-tech-card">
              <span>04 / SECURITY</span>
              <h3>Arcjet</h3>
            </div>

            <div className="chatappy-tech-card">
              <span>05 / EMAIL</span>
              <h3>Resend</h3>
            </div>

          </div>

        </div>

      </section>


      {/* ───────────────── LEARNINGS ───────────────── */}

      <section className="chatappy-section chatappy-dark">

        <div className="chatappy-section-label">
          <span>08</span>
          <p>WHAT I LEARNED</p>
        </div>

        <div className="chatappy-section-content">

          <h2>
            The project was
            <br />
            the experiment.
          </h2>

          <div className="chatappy-learnings">

            <div>
              <span>01</span>
              <p>How persistent socket connections work.</p>
            </div>

            <div>
              <span>02</span>
              <p>How clients and servers communicate through events.</p>
            </div>

            <div>
              <span>03</span>
              <p>How socket connection lifecycles are managed.</p>
            </div>

            <div>
              <span>04</span>
              <p>How rate limiting can protect a backend service.</p>
            </div>

            <div>
              <span>05</span>
              <p>How external services can be integrated into an application.</p>
            </div>

          </div>

        </div>

      </section>


      {/* ───────────────── LIMITATIONS ───────────────── */}

      <section className="chatappy-section">

        <div className="chatappy-section-label">
          <span>09</span>
          <p>LIMITATIONS</p>
        </div>

        <div className="chatappy-section-content">

          <h2>
            A learning project,
            <br />
            not a production messenger.
          </h2>

          <p>
            ChatAppy was intentionally built as an experimentation
            project rather than a production-ready messaging platform.
          </p>

          <p>
            The application focuses on understanding real-time
            communication and backend infrastructure rather than
            providing the complete feature set, scaling strategy,
            persistence model, and security requirements of a
            production messaging platform.
          </p>

          <div className="chatappy-limitation-note">
            <span>THE TAKEAWAY</span>

            <p>
              ChatAppy is small by design. Its purpose was to understand
              the foundations before building something larger.
            </p>
          </div>

        </div>

      </section>


      {/* ───────────────── FOOTER ───────────────── */}

      <footer className="chatappy-footer">

        <p className="chatappy-eyebrow">
          PROJECT / 02
        </p>

        <h2>
          Keep the
          <br />
          connection open.
        </h2>

        <a
          href="https://github.com/shauryaa108/ChatAppy"
          target="_blank"
          rel="noopener noreferrer"
          className="chatappy-footer-button"
        >
          View on GitHub <span>↗</span>
        </a>

        <a
          href="/"
          className="chatappy-footer-back"
        >
          ← Back to portfolio
        </a>

      </footer>

    </main>
  );
}

export default ChatAppy;