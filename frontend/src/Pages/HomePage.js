import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import NewsList from '../Components/NewsList';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const HomePage = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const query = useQuery().get('query') || ''; // Read the query parameter from URL

  const fetchNews = useCallback(async () => {
    try {
      const response = await axios.get('https://your-render-backend-url/news', { // Update URL
        params: { search: query, page: 1 },
      });
      setNews(response.data.articles);
    } catch (error) {
      console.error('Error fetching news:', error.message);
      setError('Failed to fetch news. Please try again later.');
    }
  }, [query]);

  useEffect(() => {
    fetchNews(); // Fetch news based on the current query parameter
  }, [fetchNews]);

  return (
    <div className="p-4">
      {error ? <p className="text-red-500">{error}</p> : <NewsList news={news} />}
    </div>
  );
};

export default HomePage;