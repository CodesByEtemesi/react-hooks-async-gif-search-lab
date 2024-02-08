import React, { useState } from "react";

function GifSearch({ handleSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search for GIFs..."
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default GifSearch;
