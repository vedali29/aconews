import React from 'react';
import NewsCard from './NewsCard';

const NewsList = ({ news }) => {
  if (!news || news.length === 0) {
    return <div className="text-center">No news available at the moment.</div>;
  }

  return (
    <div className="news-list flex flex-col items-center justify-center w-full p-4">
      <div className="grid items-center gap-12 md:grid-cols-2 lg:grid-cols-4">
        {news.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;