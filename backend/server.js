require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors({
  origin:['https://aconews1.web.app', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());

const API_KEY = process.env.API_KEY; // Use the API key from .env
const PAGE_SIZE = 10; // Adjust as needed

// Route to fetch news with search and pagination
app.get('/news', async (req, res) => {
  try {
    const { search, page } = req.query;
    
    const query = search || 'general'; // If no search term is provided, use a default term

    const response = await axios.get('https://gnews.io/api/v4/search', {
      params: {
        q: query,
        page: page || 1,
        max: PAGE_SIZE,
        token: API_KEY,
      },
    });

    console.log('API response:', response.data);

    res.json(response.data);
  } catch (error) {
    console.error('Error details:', error);
    if (error.response) {
      console.error('API response error:', error.response.data);
      res.status(error.response.status).json({ message: 'Error fetching news', error: error.response.data });
    } else if (error.request) {
      console.error('No response from API:', error.request);
      res.status(500).json({ message: 'No response from Gnews API' });
    } else {
      console.error('Error setting up API request:', error.message);
      res.status(500).json({ message: 'Error setting up API request', error: error.message });
    }
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


//errors to be solved