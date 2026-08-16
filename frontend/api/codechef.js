import * as cheerio from "cheerio";

export default async function handler(req, res) {
  try {
    console.log("CodeChef function started");

    const response = await fetch(
      "https://www.codechef.com/users/ambush_note_86",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/151.0.0.0 Safari/537.36",
        },
      }
    );

    console.log("CodeChef responded:", response.status);

    if (!response.ok) {
      return res.status(response.status).json({
        error: "CodeChef profile could not be fetched",
      });
    }

    const html = await response.text();

    console.log("CodeChef HTML received:", html.length);

    const $ = cheerio.load(html);

    /*
     * -------------------------
     * USERNAME
     * -------------------------
     */

    const username =
      $(".user-name").first().text().trim() ||
      "ambush_note_86";

    /*
     * -------------------------
     * RATING
     * -------------------------
     */

    const ratingText = $(".rating-number").first().text().trim();

    const rating = ratingText
      ? Number(ratingText.replace(/,/g, ""))
      : null;

    /*
     * -------------------------
     * GLOBAL RANK
     * -------------------------
     */

    let globalRanking = null;

    $(".rating-ranks .rating-rank").each((index, element) => {
      const label = $(element)
        .find("small")
        .text()
        .trim()
        .toLowerCase();

      const value = $(element)
        .find("strong")
        .text()
        .trim()
        .replace(/,/g, "");

      if (label.includes("global")) {
        globalRanking = Number(value);
      }
    });

    /*
     * -------------------------
     * PROBLEMS SOLVED
     * -------------------------
     */

    let problems = null;

    $(".rating-data-section").each((index, element) => {
      const text = $(element).text().trim();

      if (text.toLowerCase().includes("problems solved")) {
        const match = text.match(/(\d+)\s*problems?\s*solved/i);

        if (match) {
          problems = Number(match[1]);
        }
      }
    });

    /*
     * -------------------------
     * FINAL RESPONSE
     * -------------------------
     */

    const codechefStats = {
      username,
      problems,
      rating,
      globalRanking,
    };

    console.log("CodeChef stats:", codechefStats);

    return res.status(200).json(codechefStats);

  } catch (error) {
    console.error("CodeChef error:", error);

    return res.status(500).json({
      error: "Failed to fetch CodeChef data",
    });
  }
}