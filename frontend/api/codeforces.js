export default async function handler(request) {
  console.log("Codeforces function started");

  const response = await fetch(
    "https://codeforces.com/api/user.info?handles=yash_goyal"
  );

  console.log("Codeforces responded:", response.status);

  const data = await response.json();

  console.log("Codeforces JSON received");

  return Response.json({
    success: true,
    data: data
  });
}