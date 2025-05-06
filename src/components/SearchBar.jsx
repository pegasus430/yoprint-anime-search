import React, { useState, useEffect, useRef } from "react";

const SearchBar = ({ query = "", onSearch }) => {
  const [input, setInput] = useState(query);
  const debounceTimer = useRef(null);

  useEffect(() => {
    setInput(query); // Sync input with external query
  }, [query]);

  useEffect(() => {
    // Debounce search when typing
    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(() => {
      if (input.trim() !== query.trim()) {
        onSearch(input.trim());
      }
    }, 500);

    return () => clearTimeout(debounceTimer.current);
  }, [input, query, onSearch]); // ✅ added missing deps

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    if (input.trim() !== query.trim()) {
      onSearch(input.trim());
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search anime..."
        value={input}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
};

export default SearchBar;
