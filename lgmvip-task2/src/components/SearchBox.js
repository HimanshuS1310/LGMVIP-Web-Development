import React from "react";

const SearchBox = ({ searchfeild, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 b--black bg-white"
        type="search"
        placeholder="Search by Name"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
