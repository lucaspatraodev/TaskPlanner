import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center gap-2 w-full h-[40px] mx-auto mb-[6px] text-[#D3D3D3] p-[5px] border-[1.7px] border-[#999999] focus-within:border-yellow-500 text-[15px] bg-[#262626] rounded-lg">
      <button onClick={handleSearch}>
        <IoSearch />
      </button>
      <input
        className="bg-[#262626] focus:outline-none"
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
