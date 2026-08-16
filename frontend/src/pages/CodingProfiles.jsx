import './CodingProfiles.css';
import handler from '../api/leetcode';

const response = await fetch(handler())

const profiles = [
  {
    platform: 'LEETCODE',
    username: 'shauryaaaa108',
    url: 'https://leetcode.com/u/shauryaaaa108/',
  },
  {
    platform: 'CODECHEF',
    username: 'ambush_note_86',
    url: 'https://www.codechef.com/users/ambush_note_86',
  },
  {
    platform: 'CODEFORCES',
    username: 'yash_goyal',
    url: 'https://codeforces.com/profile/yash_goyal',
  },
];

function CodingProfiles() {
  return (
    <main className="coding-page">
      <section className="coding-header">
        <span className="coding-eyebrow">CODING PROFILES</span>

        <h1>
          Where I <em>code.</em>
        </h1>

        <p>
          A live snapshot of my competitive programming
          and problem-solving activity.
        </p>
      </section>

      <section className="coding-grid">
        {profiles.map((profile) => (
          <article className="coding-card" key={profile.platform}>
            <div className="coding-card-top">
              <span className="coding-platform">
                {profile.platform}
              </span>

              <span className="coding-live">
                ● LIVE
              </span>
            </div>

            <div className="coding-card-content">
              <h2>{profile.username}</h2>

              <div className="coding-stats">
                <div>
                  <span>PROBLEMS</span>
                  <strong>—</strong>
                </div>

                <div>
                  <span>RATING</span>
                  <strong>—</strong>
                </div>
              </div>
            </div>

            <a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="coding-profile-link"
            >
              View Profile <span>↗</span>
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}

export default CodingProfiles;