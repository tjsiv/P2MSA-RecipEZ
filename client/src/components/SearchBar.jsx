import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input change
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Handle search
  const handleSearch = () => {
    setLoading(true);
    setError("");
    setResults([]);

// API
    fetch(`https://api.example.com/search?q=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setResults(data.results); // Adjust according to API response
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch results");
        setLoading(false);
      });
  };

  return (
    <div style={styles.container}>
      <div style={styles.inputButtonContainer}>
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
      {loading && <div style={styles.loading}>Loading...</div>}
      {error && <div style={styles.error}>{error}</div>}
      <div style={styles.resultsContainer}>
        {results.length > 0 ? (
          results.map((result, index) => (
            <div key={index} style={styles.resultItem}>
              {result.name} {/* Adjust according to API response */}
            </div>
          ))
        ) : (
          !loading && query && <div style={styles.noResults}>No results found</div>
        )}
      </div>
    </div>
  );
};


// Styling
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  inputButtonContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
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
    backgroundColor: "rgb(192, 132, 252)",
    color: "white",
    cursor: "pointer",
  },
  resultsContainer: {
    marginTop: "16px",
    width: "100%",
    textAlign: "center",
  },
  resultItem: {
    padding: "8px",
    borderBottom: "1px solid #ccc",
  },
  loading: {
    padding: "8px",
    color: "#007bff",
  },
  error: {
    padding: "8px",
    color: "red",
  },
  noResults: {
    padding: "8px",
    color: "#999",
  },
};

export default SearchBar;
