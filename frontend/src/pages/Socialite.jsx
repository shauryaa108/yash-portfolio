import './Socialite.css';

function Socialite() {
  return (
    <main className="socialite-page">
      {/* Header */}
      <header className="socialite-header">
        <a href="/" className="socialite-back">
          ← Back to portfolio
        </a>

        <span className="socialite-number">03 / PROJECT</span>
      </header>

      {/* Hero */}
      <section className="socialite-hero">
        <div className="socialite-meta">
          <span>WEB APP</span>
          <span>BACKEND FOCUSED</span>
        </div>

        <h1>Socialite</h1>

        <p className="socialite-intro">
          A backend-focused social platform built to understand
          authentication, media handling, database relationships,
          and scalable backend operations.
        </p>

        <div className="socialite-hero-line" />
      </section>

      {/* Overview */}
      <section className="socialite-section socialite-overview">
        <div className="socialite-label">
          <span>01</span>
          <span>OVERVIEW</span>
        </div>

        <div className="socialite-content">
          <h2>
            Building a social platform
            <br />
            to understand the backend.
          </h2>

          <p>
            Socialite is a web application designed primarily as a
            backend engineering learning project. Instead of focusing
            on solving one particular user problem, the project was
            built to provide hands-on experience with the systems
            behind a modern social platform.
          </p>

          <p>
            Users can create accounts, authenticate themselves,
            upload videos, interact with videos, post tweets,
            comment, maintain playlists, and like content.
          </p>
        </div>
      </section>

      {/* Why */}
      <section className="socialite-dark">
        <div className="socialite-section">
          <div className="socialite-label">
            <span>02</span>
            <span>WHY I BUILT IT</span>
          </div>

          <div className="socialite-content">
            <h2>
              I wanted to understand
              <br />
              what happens behind the UI.
            </h2>

            <p>
              Social platforms look simple from the outside, but
              they involve authentication, data relationships,
              authorization, media management, and large numbers
              of database operations.
            </p>

            <p>
              I built Socialite to get practical experience with
              these backend fundamentals instead of only learning
              them theoretically.
            </p>

            <div className="socialite-learning-grid">
              <div>
                <span>01</span>
                <strong>Authentication</strong>
                <p>
                  Understanding JWT-based authentication and
                  protected backend routes.
                </p>
              </div>

              <div>
                <span>02</span>
                <strong>Password Security</strong>
                <p>
                  Learning password hashing and secure credential
                  handling.
                </p>
              </div>

              <div>
                <span>03</span>
                <strong>CRUD Operations</strong>
                <p>
                  Working with create, read, update, and delete
                  operations across different resources.
                </p>
              </div>

              <div>
                <span>04</span>
                <strong>Database Design</strong>
                <p>
                  Designing schemas and relationships between
                  users, videos, comments, playlists, and likes.
                </p>
              </div>

              <div>
                <span>05</span>
                <strong>Query Optimization</strong>
                <p>
                  Exploring aggregation pipelines and
                  pipeline-based database queries.
                </p>
              </div>

              <div>
                <span>06</span>
                <strong>Backend Architecture</strong>
                <p>
                  Understanding how different backend components
                  work together to support a larger application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="socialite-section">
        <div className="socialite-label">
          <span>03</span>
          <span>HOW IT WORKS</span>
        </div>

        <div className="socialite-content">
          <h2>
            From authentication
            <br />
            to interaction.
          </h2>

          <p>
            The application starts with user authentication.
            Once authenticated, users can interact with different
            resources available on the platform.
          </p>

          <div className="socialite-flow">
            <div className="flow-step">
              <span>01</span>
              <strong>Sign Up</strong>
              <p>
                A user creates an account and their credentials
                are securely handled by the backend.
              </p>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-step">
              <span>02</span>
              <strong>Authenticate</strong>
              <p>
                JWT-based authentication allows protected
                resources to identify the user.
              </p>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-step">
              <span>03</span>
              <strong>Create Content</strong>
              <p>
                Users can upload videos, post tweets and
                interact with existing content.
              </p>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-step">
              <span>04</span>
              <strong>Interact</strong>
              <p>
                Users can comment, like videos and organize
                content into playlists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="socialite-feature-section">
        <div className="socialite-section">
          <div className="socialite-label">
            <span>04</span>
            <span>FEATURES</span>
          </div>

          <div className="socialite-content">
            <h2>What the backend supports.</h2>

            <div className="socialite-features">
              <div>
                <span>01</span>
                <h3>User Authentication</h3>
                <p>
                  User registration and JWT-based authentication
                  for protected resources.
                </p>
              </div>

              <div>
                <span>02</span>
                <h3>Video Management</h3>
                <p>
                  Users can upload, fetch and interact with
                  videos on the platform.
                </p>
              </div>

              <div>
                <span>03</span>
                <h3>Comments</h3>
                <p>
                  Users can add comments and participate in
                  discussions around videos.
                </p>
              </div>

              <div>
                <span>04</span>
                <h3>Tweets</h3>
                <p>
                  Users can create and interact with short-form
                  text content.
                </p>
              </div>

              <div>
                <span>05</span>
                <h3>Playlists</h3>
                <p>
                  Videos can be organized into user-managed
                  playlists.
                </p>
              </div>

              <div>
                <span>06</span>
                <h3>Likes</h3>
                <p>
                  Users can like videos and maintain their
                  interactions with content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="socialite-section">
        <div className="socialite-label">
          <span>05</span>
          <span>ARCHITECTURE</span>
        </div>

        <div className="socialite-content">
          <h2>
            Data relationships
            <br />
            are the foundation.
          </h2>

          <p>
            A major part of the project was understanding how
            different entities relate to each other and how those
            relationships affect backend queries.
          </p>

          <div className="socialite-architecture">
            <div className="architecture-box">
              <span>USER</span>
              <p>Authentication & ownership</p>
            </div>

            <div className="architecture-line">↓</div>

            <div className="architecture-row">
              <div className="architecture-box">
                <span>VIDEOS</span>
                <p>Uploaded content</p>
              </div>

              <div className="architecture-box">
                <span>TWEETS</span>
                <p>User-generated posts</p>
              </div>

              <div className="architecture-box">
                <span>PLAYLISTS</span>
                <p>Organized videos</p>
              </div>
            </div>

            <div className="architecture-row">
              <div className="architecture-box">
                <span>COMMENTS</span>
                <p>Video interactions</p>
              </div>

              <div className="architecture-box">
                <span>LIKES</span>
                <p>Content interactions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Database */}
      <section className="socialite-dark">
        <div className="socialite-section">
          <div className="socialite-label">
            <span>06</span>
            <span>DATABASE</span>
          </div>

          <div className="socialite-content">
            <h2>
              Queries should work
              <br />
              with the data, not against it.
            </h2>

            <p>
              One of the important learning areas in Socialite was
              working with database relationships and aggregation
              pipelines.
            </p>

            <p>
              Instead of treating database operations as isolated
              CRUD calls, the project explores pipeline-based
              queries to retrieve and process related information.
            </p>

            <div className="socialite-code-block">
              <span>DATABASE / QUERY APPROACH</span>

              <code>
                User → Videos → Likes
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Aggregation
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Processed Result
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="socialite-section">
        <div className="socialite-label">
          <span>07</span>
          <span>TECH STACK</span>
        </div>

        <div className="socialite-content">
          <h2>Tools behind the system.</h2>

          <div className="socialite-stack">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>JWT</span>
          </div>
        </div>
      </section>

      {/* Limitations */}
      <section className="socialite-limitations">
        <div className="socialite-section">
          <div className="socialite-label">
            <span>08</span>
            <span>LIMITATIONS</span>
          </div>

          <div className="socialite-content">
            <h2>
              It is a learning project,
              <br />
              not a finished social network.
            </h2>

            <p>
              Socialite currently does not include a recommendation
              system. Content discovery is therefore not personalized
              based on user behavior.
            </p>

            <p>
              This limitation is intentional in the context of the
              project. The primary objective was to understand
              backend fundamentals rather than build a complete
              production-scale social platform.
            </p>
          </div>
        </div>
      </section>

      {/* Learning */}
      <section className="socialite-dark socialite-learning">
        <div className="socialite-section">
          <div className="socialite-label">
            <span>09</span>
            <span>WHAT I LEARNED</span>
          </div>

          <div className="socialite-content">
            <h2>
              The real product
              <br />
              was the learning.
            </h2>

            <p>
              Socialite gave me practical experience with the
              fundamentals required to build backend systems.
            </p>

            <p>
              More importantly, it changed how I think about
              applications. Features are not isolated pieces of
              functionality — they depend on authentication,
              data models, relationships, queries and the way
              those pieces interact.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="socialite-footer">
        <div>
          <span>03 / SOCIALITE</span>
        </div>

        <div className="socialite-footer-links">
          <a
            href="https://github.com/shauryaa108/Socialite"
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

export default Socialite;