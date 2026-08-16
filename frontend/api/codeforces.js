export default async function handler(req, res) {
  console.log("Codeforces function started");

  const response = await fetch(
    "https://codeforces.com/api/user.info?handles=yash_goyal"
  );

  console.log("Codeforces responded:", response.status);

  const data = await response.json();

  console.log("Codeforces JSON received");

  const user = data.result[0];

  const codeforcesStats = {
    username: user.handle,
    rating: user.rating,
    maxRating: user.maxRating,
    rank: user.rank,
    maxRank: user.maxRank,
  };

  return res.status(200).json(codeforcesStats);
}