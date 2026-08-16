import { useEffect, useState } from "react";

import './CodingProfiles.css';


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
  const [leetcode, setLeetcode] = useState(null);
  useEffect(() => {
    const fetchLeetcode = async () => {
      const response = await fetch("/api/leetcode");
      const data = await response.json();

      setLeetcode(data);
    };

    fetchLeetcode();
  }, []);
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
                  <strong>
                    {profile.platform === 'LEETCODE'
                      ? leetcode?.total ?? '...'
                      : '—'}
                  </strong>
                </div>
                <div className="coding-difficulty">
                  <div>
                    <span>EASY</span>
                    <strong>
                      {profile.platform === 'LEETCODE'
                        ? leetcode?.easy ?? '...'
                        : '—'}
                    </strong>
                  </div>

                  <div>
                    <span>MEDIUM</span>
                    <strong>
                      {profile.platform === 'LEETCODE'
                        ? leetcode?.medium ?? '...'
                        : '—'}
                    </strong>
                  </div>

                  <div>
                    <span>HARD</span>
                    <strong>
                      {profile.platform === 'LEETCODE'
                        ? leetcode?.hard ?? '...'
                        : '—'}
                    </strong>
                  </div>
                </div>
                <div>
                  <span>RATING</span>
                  <strong>
                    {profile.platform === 'LEETCODE'
                      ? leetcode?.rating ?? '...'
                      : '—'}
                  </strong>
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