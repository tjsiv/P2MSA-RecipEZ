import React, { useState, useContext } from "react";
import RecipeCard from "./RecipeCard";
import PreviewPopup from "./PreviewPopup";
import { UserContext } from '../context/UserContext';

const SearchBar = () => {
  const { user } = useContext(UserContext); // Access user from context
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [modal, setModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    setLoading(true);
    setError("");
    setResults([]);

    fetch(`http://localhost:9000/search?q=${query}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log("data from search", data)
        setResults(data); // Adjust according to API response
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch results");
        setLoading(false);
      });
  };

  const handleModal = (result = null) => {
    setSelectedData(result);
    setModal(!modal);
  };

  return (
    <div style={styles.container} className="pt-4">
      <div style={styles.inputButtonContainer}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress} // Add event listener here
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
          <RecipeCard results={results} handleModal={handleModal}/>
        ) : (
          !loading &&
          query && <div style={styles.noResults}>No results found</div>
        )}
      </div>
      {modal && selectedData ? <PreviewPopup data={selectedData} onClose={handleModal} /> : null}
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
    color: "black",
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
