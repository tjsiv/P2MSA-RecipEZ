import React, { useState, useEffect } from "react";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://react-express-connection.onrender.com/api/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the categories!", error);
      });
  }, []);

  return (
    <div>
      <h1>Recipe Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.idCategory}>{category.strCategory}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
