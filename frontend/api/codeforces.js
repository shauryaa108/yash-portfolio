export default async function handler(req, res) {
  try {
    console.log("Codeforces function started");

    // Get rating and rank
    const userResponse = await fetch(
      "https://codeforces.com/api/user.info?handles=yash_goyal"
    );

    const userData = await userResponse.json();

    const user = userData.result[0];

    console.log("User data received");

    // Get all submissions
    const submissionsResponse = await fetch(
      "https://codeforces.com/api/user.status?handle=yash_goyal"
    );

    const submissionsData = await submissionsResponse.json();

    console.log("Submissions received:", submissionsData.result.length);

    // We'll calculate solved problems here
    const solvedProblems = new Set();

    submissionsData.result.forEach((submission) => {
      if (submission.verdict === "OK") {
        const problem = submission.problem;

        solvedProblems.add(
          `${problem.contestId}-${problem.index}`
        );
      }
    });

    const codeforcesStats = {
      username: user.handle,
      problems: solvedProblems.size,
      rating: user.rating,
      maxRating: user.maxRating,
      rank: user.rank,
      maxRank: user.maxRank,
    };

    console.log("Final stats:", codeforcesStats);

    return res.status(200).json(codeforcesStats);

  } catch (error) {
    console.error("Codeforces error:", error);

    return res.status(500).json({
      error: "Failed to fetch Codeforces data"
    });
  }
}