const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Your Dribbble access token
const accessToken = 'f42cdcdd9126434f6b33432ae79d02cad2c7b1de38b5d5a68d7d1f5d2e993fcd'; // Replace with your token

// Serve static files (HTML, CSS, JS) from a "public" folder
app.use(express.static('public'));

// API endpoint to fetch Dribbble shots
app.get('/api/shots', async (req, res) => {
  try {
    const response = await axios.get('https://api.dribbble.com/v2/user/shots', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    res.json(response.data); // Send the shots data to the frontend
  } catch (error) {
    console.error('Error fetching shots:', error);
    res.status(500).send('Error fetching shots');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});