import React from 'react';

const NewsCard = ({ article }) => {
  if (!article || !article.title) {
    return <div>Article data is not available.</div>;
  }

  return (
    <div className="relative w-86 h-full flex flex-col p-4 rounded-lg transition-all duration-300 bg-[#f3f4f6] cursor-pointer hover:-translate-y-5">
    {article.image && (
      <div className="w-full h-full rounded-lg mb-2 bg-gray-200 flex items-center justify-center">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    )}
    <h2 className="text-xl font-semibold text-gray-900 mb-1 w-full h-full">{article.title}</h2>
    <p className="text-sm text-gray-600 mb-2 line-clamp-3 w-full h-full">{article.description}</p>
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      Read more
    </a>
  </div>
  );
};

export default NewsCard;



