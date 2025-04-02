// File: api/shots.js
const axios = require('axios');

// In-memory cache (note: this will reset between function invocations in serverless)
const cache = new Map();

const accessToken = 'f42cdcdd9126434f6b33432ae79d02cad2c7b1de38b5d5a68d7d1f5d2e993fcd';

export default async function handler(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = 30;

    // Check cache
    const cacheKey = `shots-page-${page}`;
    if (cache.has(cacheKey)) {
      console.log(`Serving from cache: ${cacheKey}`);
      return res.json(cache.get(cacheKey));
    }

    const response = await axios.get('https://api.dribbble.com/v2/user/shots', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      params: {
        page: page,
        per_page: perPage
      }
    });

    const shots = response.data;
    const hasMore = shots.length === perPage; // If we got 30 shots, there might be more

    const data = {
      shots: shots,
      hasMore: hasMore
    };

    cache.set(cacheKey, data);
    console.log(`Cached: ${cacheKey}`);

    res.json(data);
  } catch (error) {
    console.error('Error fetching shots:', error.message);
    if (error.response) {
      console.error('Dribbble API response:', error.response.status, error.response.data);
    }
    res.status(500).json({ error: 'Error fetching shots' });
  }
}