export default async function handler(request) {
    const handle = "yash_goyal";

    const response = await fetch(
        `https://codeforces.com/api/user.info?handles=${handle}`
    );

    const data = await response.json();

    if (data.status !== "OK") {
        return Response.json(
            { error: data.comment },
            { status: 500 }
        );
    }

    const user = data.result[0];

    const codeforcesStats = {
        username: user.handle,
        rating: user.rating,
        maxRating: user.maxRating,
        rank: user.rank,
        maxRank: user.maxRank
    };

    return new Response(JSON.stringify(codeforcesStats), {
    headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
    },
    });

}