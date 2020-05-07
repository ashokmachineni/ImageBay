import React, { useState } from "react";
import "./Search.css";
import picLogo from "./imgs.png";

function Search({ searchText }) {
  const [text, setText] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <div className="jumbotron">
      <h1 className="display-1">
        <img src={picLogo} className="brand-icon" />
        ImageBay
      </h1>
      <div className="input-group w-50 mx-auto">
        <form onSubmit={onSubmit} className="form-inline w-50 mx-auto">
          <input
            onChange={e => setText(e.target.value)}
            className="form-control"
            type="search"
            placeholder="Search Images..."
            aria-label="Search"
          />
          <button className="btn btn-dark my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
