export default async function handler(req, res) {
  console.log("CodeChef function started");

  const response = await fetch(
    "https://www.codechef.com/users/ambush_note_86"
  );

  console.log("CodeChef responded:", response.status);

  const html = await response.text();

  console.log("CodeChef HTML received:", html.length);

  return res.status(200).json({
    success: true,
    length: html.length
  });
}