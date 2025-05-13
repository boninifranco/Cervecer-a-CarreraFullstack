import React from "react";
import './search-filter.css'

export const SearchFilter = ({ setSearch }) => {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar"
        aria-label="Search"
        onChange={handleSearch}
        className="input input-search"
      />
    </div>
  );
};
