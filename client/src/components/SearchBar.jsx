import React, { useState, useEffect } from "react";

// SearchBar set to empty 
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

//   Input change to the select target value
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

//   Query fires on search
  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        style={styles.input}
      />
      <button onClick={handleSearch} style={styles.button}>
        Search
      </button>
    </div>
  );
};

// Styling
const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  input: {
    padding: "8px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginRight: "8px",
  },
  button: {
    padding: "8px 16px",
    fontSize: "16px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
  },
};

export default SearchBar;
