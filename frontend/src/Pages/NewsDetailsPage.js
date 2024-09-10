import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const NewsDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <button onClick={() => navigate(-1)} className="bg-gray-200 p-2 mb-4 rounded">
        Back
      </button>
      <h1 className="text-3xl font-bold mb-4">News Details (ID: {id})</h1>
      <p>Here you can display the full news article content.</p>
    </div>
  );
};

export default NewsDetailsPage;
