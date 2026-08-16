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
  const [codechef, setCodechef] = useState(null);
  const [codeforces, setCodeforces] = useState(null);


  useEffect(() => {

  const fetchProfiles = async () => {

    const leetcodeResponse = await fetch("/api/leetcode");
    const leetcodeData = await leetcodeResponse.json();
    setLeetcode(leetcodeData);

    const codeforcesResponse = await fetch("/api/codeforces");
    const codeforcesData = await codeforcesResponse.json();
    setCodeforces(codeforcesData);

    const codechefResponse = await fetch("/api/codechef");
    const codechefData = await codechefResponse.json();
    setCodechef(codechefData);

  };

  fetchProfiles();

}, []);


  return (
    <main className="coding-page">

      <section className="coding-header">

        <span className="coding-eyebrow">
          CODING PROFILES
        </span>

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

          <article
            className="coding-card"
            key={profile.platform}
          >

            <div className="coding-card-top">

              <span className="coding-platform">
                {profile.platform}
              </span>

              <span className="coding-live">
                ● LIVE
              </span>

            </div>


            <div className="coding-card-content">

              <h2>
                {profile.username}
              </h2>


              <div className="coding-stats">

                <div>
                  <span>PROBLEMS</span>

                  <strong>
                    {profile.platform === 'LEETCODE'
                      ? leetcode?.total ?? '...'
                      : profile.platform === 'CODECHEF'
                      ? codechef?.problems ?? '...'
                      : profile.platform === 'CODEFORCES'
                      ? codeforces?.problems ?? '...'
                      : '—'}
                  </strong>
                </div>


                {profile.platform === 'LEETCODE' && (

                  <div className="coding-difficulty">

                    <div>
                      <span>EASY</span>
                      <strong>
                        {leetcode?.easy ?? '...'}
                      </strong>
                    </div>

                    <div>
                      <span>MEDIUM</span>
                      <strong>
                        {leetcode?.medium ?? '...'}
                      </strong>
                    </div>

                    <div>
                      <span>HARD</span>
                      <strong>
                        {leetcode?.hard ?? '...'}
                      </strong>
                    </div>

                  </div>

                )}


                <div>
                  <span>RATING</span>

                  <strong>

                    {profile.platform === 'LEETCODE'
                      ? leetcode?.rating ?? '...'

                      : profile.platform === 'CODECHEF'
                      ? codechef?.rating ?? '...'

                      : codeforces?.rating ?? '...'}

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