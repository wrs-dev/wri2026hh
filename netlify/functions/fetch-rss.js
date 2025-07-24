const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  try {
    const response = await fetch('https://interfacejournal.com/feed');
    const data = await response.text();

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/rss+xml',
      },
      body: data,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch RSS feed' }),
    };
  }
};