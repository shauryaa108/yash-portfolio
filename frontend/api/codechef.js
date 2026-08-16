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

    // -----------------------------
    // USERNAME
    // -----------------------------

    const username =
      $(".user-name").first().text().trim() ||
      "ambush_note_86";


    // -----------------------------
    // RATING
    // -----------------------------

    let rating = null;

    const ratingText = $(".rating-number")
      .first()
      .text()
      .trim();

    if (ratingText) {
      rating = Number(
        ratingText.replace(/,/g, "")
      );
    }


    // -----------------------------
    // TOTAL PROBLEMS SOLVED
    // -----------------------------

    let problems = null;

    // Get all visible text from the page
    const bodyText = $("body")
      .text()
      .replace(/\s+/g, " ")
      .trim();

    console.log(
      "Searching CodeChef text for problems..."
    );

    const problemsMatch = bodyText.match(
      /Total\s+Problems\s+Solved\s*:\s*([\d,]+)/i
    );

    if (problemsMatch) {
      problems = Number(
        problemsMatch[1].replace(/,/g, "")
      );
    }


    // -----------------------------
    // FALLBACK RATING
    // -----------------------------

    if (rating === null) {
      const ratingMatch = bodyText.match(
        /CodeChef\s+Rating\s+(\d+)/i
      );

      if (ratingMatch) {
        rating = Number(ratingMatch[1]);
      }
    }


    // -----------------------------
    // FINAL RESPONSE
    // -----------------------------

    const codechefStats = {
      username,
      problems,
      rating,
    };

    console.log(
      "CodeChef stats:",
      codechefStats
    );

    return res.status(200).json(codechefStats);

  } catch (error) {
    console.error(
      "CodeChef error:",
      error
    );

    return res.status(500).json({
      error: "Failed to fetch CodeChef data",
    });
  }
}