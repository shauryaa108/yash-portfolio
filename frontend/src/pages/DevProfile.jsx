import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './DevProfile.css';

function DevProfile() {
  const [fileContent, setFileContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/dev.yash.md')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Unable to load dev.yash.md');
        }

        return response.text();
      })
      .then((data) => {
        setFileContent(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setFileContent('Unable to load developer profile.');
        setLoading(false);
      });
  }, []);

  return (
    <main className="dev-profile-page">
      <header className="dev-profile-header">
        <Link to="/" className="dev-profile-back">
          ← Back to portfolio
        </Link>

        <div className="dev-profile-file">
          <span className="file-dot" />
          dev.yash.md
        </div>

        <span className="readonly-label">
          READ ONLY
        </span>
      </header>

      <section className="dev-profile-wrapper">
        <div className="dev-profile-window">
          <div className="dev-profile-window-head">
            <div className="window-dots">
              <span />
              <span />
              <span />
            </div>

            <span className="window-title">
              dev.yash.md
            </span>

            <span className="window-status">
              ● local
            </span>
          </div>

          <div className="dev-profile-body">
            {loading ? (
              <div className="dev-loading">
                Loading developer profile...
              </div>
            ) : (
              <pre>
                <code>{fileContent}</code>
              </pre>
            )}
          </div>
        </div>

        <div className="dev-profile-footer">
          <span>
            developer profile / v1.0
          </span>

          <span>
            read-only document
          </span>
        </div>
      </section>
    </main>
  );
}

export default DevProfile;