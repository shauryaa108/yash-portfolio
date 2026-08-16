export default async function handler(request) {
    const username = "ambush_note_86";

    const response = await fetch(
        `https://www.codechef.com/users/${username}`
    );

    const html = await response.text();

    const problemsMatch = html.match(
        /Total Problems Solved:\s*([0-9,]+)/
    );

    const ratingMatch = html.match(
        /CodeChef Rating[\s\S]{0,1000}?Highest Rating\s*([0-9]+)/
    );

    const globalRankMatch = html.match(
        /CodeChef Rating[\s\S]{0,1500}?Global Rank:\s*([0-9]+)/
    );

    const codechefStats = {
        username,
        problems: problemsMatch
            ? Number(problemsMatch[1].replace(/,/g, ""))
            : null,

        rating: ratingMatch
            ? Number(ratingMatch[1])
            : null,

        globalRanking: globalRankMatch
            ? Number(globalRankMatch[1])
            : null
    };

    return Response.json(codechefStats);
}