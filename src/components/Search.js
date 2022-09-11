import React from "react";

function Search({searchTerm, setSearchTerm}) {

  function handleChange (e) {
    let value = e.target.value
    setSearchTerm(value)
    console.log(value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt" 
          value={searchTerm}
          onChange={handleChange}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
