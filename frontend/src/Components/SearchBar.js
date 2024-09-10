import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(input); // Call the onSearch function with the current input value
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center rounded-lg">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search news"
        className="p-2 w-full rounded-l-full border-2 border-[#0866ff] text-black "
      />
      <button type="submit" className="bg-[#0866ff] text-black p-2 rounded-r-full m-2">
        <FaSearch style={{color:'white', height:'26px',width:'23px'}} />
      </button>
    </form>
  );
};

export default SearchBar;
