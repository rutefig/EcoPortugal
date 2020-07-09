import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div>
      <input
        className="searchbox-input"
        type='search'
        placeholder='Diga-nos o que pretende reciclar'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
