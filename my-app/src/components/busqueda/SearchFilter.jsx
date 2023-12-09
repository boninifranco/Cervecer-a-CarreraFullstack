import React from "react";
import "./search.css";

const SearchFilter = ({ setSearch }) => {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input
        className="form-control me-2 search"
        type="text"
        placeholder="Buscar"
        aria-label="Search"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchFilter;
