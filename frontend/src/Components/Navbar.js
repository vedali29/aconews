import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = ({ setSearchQuery }) => {
  const navigate = useNavigate();

  const handleSearch = (query) => {
    setSearchQuery(query); // Update the search query state
    navigate(`/search?query=${encodeURIComponent(query)}`); // Redirect to search results page
  };

  const handleCategoryClick = (category) => {
    setSearchQuery(category); // Set the search query state to the clicked category
    navigate(`/search?query=${encodeURIComponent(category)}`); // Redirect to the search results page
  };

  return (
    <nav className="p-2 rounded-full m-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-10">
          {/* Link each heading to the search results of its category */}
          <button onClick={() => handleCategoryClick('Health')} className="text-xl font-bold text-[#ffbc00]">Health</button>
          <button onClick={() => handleCategoryClick('Technology')} className="text-xl font-bold text-[#ffbc00]">Technology</button>
          <button onClick={() => handleCategoryClick('Farming')} className="text-xl font-bold text-[#ffbc00]">Farming</button>
          <button onClick={() => handleCategoryClick('Finance')} className="text-xl font-bold text-[#ffbc00]">Finance</button>
          <button onClick={() => handleCategoryClick('Market')} className="text-xl font-bold text-[#ffbc00]">Market</button>
          <button onClick={() => handleCategoryClick('Fashion')} className="text-xl font-bold text-[#ffbc00]">Fashion</button>
        </div>
        <div className="flex items-center space-x-4">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
