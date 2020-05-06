import React, { useState } from "react";

function Search({ searchText }) {
  const [text, setText] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand">Wait for Name</a>
        <form onSubmit={onSubmit} className="form-inline">
          <input
            onChange={e => setText(e.target.value)}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    </div>
  );
}

export default Search;
