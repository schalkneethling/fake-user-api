import users from "../../users.json" assert { type: "json" };

export const handler = async (event, context) => {
  try {
    // Parse the count parameter from the URL
    const countParam = event.queryStringParameters?.count;

    // Get the base URL of the site (works in Netlify deployment)
    const baseUrl =
      event.headers["x-netlify-deployment-url"] ||
      "https://fictionalfolks.netlify.app";

    // Convert count to a number, default to all users if not specified or invalid
    let count = parseInt(countParam, 10);
    if (isNaN(count) || count <= 0) {
      count = users.length;
    }

    // Limit count to available users
    count = Math.min(count, users.length);

    // Shuffle and slice the users array to get random users
    const shuffledUsers = users
      .sort(() => 0.5 - Math.random())
      .slice(0, count)
      .map((user) => ({
        ...user,
        avatarURL: `${baseUrl}/assets/avatars/${user.avatarURL}`,
      }));

    // Return the users as JSON response
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=3600",
      },
      body: JSON.stringify(shuffledUsers),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
