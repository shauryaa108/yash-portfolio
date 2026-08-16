export default async function handler(request){
    const query = `
        query userPublicProfile($username : String!){
            matchedUser(username : $username){
                username
                submitStatsGlobal{
                    acSubmissionNum {
                        difficulty
                        count
                    }
                }
            },
            userContestRanking(username: $username) {
                rating
                globalRanking
            }

        }
    `
    const variables = {
        "username": "shauryaaaa108"
    };
    const response = await fetch("https://leetcode.com/graphql/",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            query,
            variables
        })
    });

    const data = await response.json();

    const submissions = data.data.matchedUser.submitStatsGlobal.acSubmissionNum;
    const contestData = data.data.userContestRanking

    const easyCount = submissions.find((e)=>{return e.difficulty == 'Easy'}).count
    const mediumCount = submissions.find((e)=>{ return e.difficulty == "Medium"}).count
    const hardCount = submissions.find((e)=>{return e.difficulty == "Hard"}).count
    const totalCount = easyCount + mediumCount + hardCount
    const rating = contestData.rating
    const globalRanking = contestData.globalRanking

    const leetcodeStats = {
    username: "shauryaaaa108",
    total: totalCount,
    easy: easyCount,
    medium: mediumCount,
    hard: hardCount,
    rating: rating,
    globalRanking: globalRanking
    };
    return Response.json(leetcodeStats)
}