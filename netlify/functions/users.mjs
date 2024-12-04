import users from '../../users.json' assert { type: 'json' };

export default async (request) => {
  try {
    // Parse the count parameter from the URL
    const url = new URL(request.url);
    const countParam = url.searchParams.get('count');
    
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
      .slice(0, count);
    
    // Return the users as JSON response
    return new Response(JSON.stringify(shuffledUsers), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  } catch (error) {
    // Added error handling
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
