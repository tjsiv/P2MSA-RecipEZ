var express = require('express');
var appCall = express.Router();


const axios = require('axios');

appCall.get("/", async (req, res) => {
  try {
    // Extract the query parameter from the request
    const query = req.query.q;

    let apiUrl;

    // Determine if the query is a name or a first letter
    if (query.length === 1) {
      // Search by first letter
      apiUrl = `https://www.themealdb.com/api/json/v2/${process.env.API_KEY}/search.php?f=${query}`;
    } else {
      // Search by name
      apiUrl = `https://www.themealdb.com/api/json/v2/${process.env.API_KEY}/search.php?s=${query}`; 
    }

    // Fetch data from the API
    const response = await axios.get(apiUrl);

    // Return relevant results from the query
    res.json(response.data.meals);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/recipe/:id", async (req, res) => {
  const recipe_id = req.params.id;
  const apiUrl = `https://www.themealdb.com/api/json/v2/${process.env.API_KEY}/lookup.php?i=${recipe_id}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data.meals[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = appCall;