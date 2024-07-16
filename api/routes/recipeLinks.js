var express = require('express');
var router = express.Router();
// import database connection from db file
var pool = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//favorite a recipe from button
router.post("/favorites", async (req, res) => {
  try {
    const {
      title,
      description,
      category_id,
      instructions,
      pictures,
      yt_link,
      ingredients,
      measurements,
      userId
    } = req.body;

    // Insert new recipe into recipes table
    const newRecipe = await pool.query(
      "INSERT INTO recipes (title, description, category_id, instructions, pictures, yt_link, ingredients, measurements) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [title, description, category_id, instructions, pictures, yt_link, ingredients, measurements]
    );

    const recipeId = newRecipe.rows[0].recipe_id;

    // Insert into favorites table for the user
    const newFavorite = await pool.query(
      "INSERT INTO favorites (user_id, recipe_id) VALUES ($1, $2) RETURNING *",
      [userId, recipeId]
    );

    // Return the new recipe and favorite details
    res.json({
      recipe: newRecipe.rows[0],
      favorite: newFavorite.rows[0]
    });
  } catch (err) {
    console.error("Error adding recipe to favorites:", err);
    res.status(500).json({ error: "Server Error" });
  }
});


//pull all recipes from a sql table
router.get("/recipes", async(req, res) => {
  try{
    // get all recipes from the database
    const allRecipes = await pool.query("SELECT * FROM recipes");

    // only return relevant results of query
    res.json(allRecipes.rows);
  } catch(err){
    console.error(err);
    res.status(500).send("Server Error"); 
  }
})

//get a single recipe by id
router.get("/recipes/:id", async(req, res) => {
  try{
    // get a single recipe by id from the database
    const { id } = req.params;
    const singleRecipe = await pool.query("SELECT * FROM recipe WHERE recipe_id = $1", [id]);

    // only return relevant results of query
    res.json(singleRecipe.rows[0]);
  } catch(err){
    console.error(err);
    res.status(500).send("Server Error"); 
  }
})

//update a recipe by id
router.put("/recipes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, category_id, instructions, pictures, yt_link, ingredients, measurements } = req.body;

    const updatedRecipe = await pool.query(
      "UPDATE recipes SET name=$1, category_id=$2, instructions=$3, pictures=$4, yt_link=$5, ingredients=$6, measurements=$7, updated_at=NOW() WHERE recipe_id=$8 RETURNING *",
      [name, category_id, instructions, pictures, yt_link, ingredients, measurements, id]
    );

    res.json(updatedRecipe.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});


//delete a recipe by id
router.delete("/recipes/:id", async(req, res) => {
  try{
    // delete a recipe by id from the database
    const { id } = req.params;
    const deletedRecipe = await pool.query("DELETE FROM recipe WHERE recipe_id = $1", [id]);

    // only return relevant results of query
    res.json(deletedRecipe.rows[0]);
  } catch(err){
    console.error(err);
    res.status(500).send("Server Error"); 
  }
})

module.exports = router;
