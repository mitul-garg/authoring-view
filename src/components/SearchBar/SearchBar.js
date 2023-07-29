import React from "react";

import { BiSearch } from "react-icons/bi";

import "./styles.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div>
        <BiSearch className="search-bar-icon" />
      </div>
      <div>
        <input type="text" placeholder="dfin" />
      </div>
    </div>
  );
};

export default SearchBar;
