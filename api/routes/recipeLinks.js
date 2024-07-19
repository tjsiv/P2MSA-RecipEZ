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
  const { userId, recipeId, recipe_name, category_id, instructions, pictures, yt_link, ingredients, measurements } = req.body; 

  try {
    // Check if the favorite already exists for the user
    const existingFavorite = await pool.query(
      "SELECT * FROM favorites WHERE user_id = $1 AND recipe_id = $2",
      [userId, recipeId]
    );

    if (existingFavorite.rows.length > 0) {
      // If favorite exists, remove it (unfavorite)
      await pool.query(
        "DELETE FROM favorites WHERE user_id = $1 AND recipe_id = $2",
        [userId, recipeId]
      );

      res.json({ message: "Recipe removed from favorites" });
    } else {
      // Check if the recipe exists in the recipes table
      let newRecipeId = recipeId; // Initialize with recipeId from request body
      const existingRecipe = await pool.query(
        "SELECT recipe_id FROM recipes WHERE recipe_id = $1",
        [recipeId]
      );

      if (existingRecipe.rows.length === 0) {
        // Recipe does not exist, insert it into recipes table
        const newRecipe = await pool.query(
          "INSERT INTO recipes (recipe_id, recipe_name, category_id, instructions, pictures, yt_link, ingredients, measurements) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING recipe_id",
          [recipeId, recipe_name, category_id, instructions, pictures, yt_link, ingredients, measurements]
        );
        newRecipeId = newRecipe.rows[0].recipe_id;
      }

      // Insert into favorites table
      const newFavorite = await pool.query(
        "INSERT INTO favorites (user_id, recipe_id) VALUES ($1, $2) RETURNING *",
        [userId, newRecipeId]
      );

      res.json({ favorite: newFavorite.rows[0], message: "Recipe added to favorites" });
    }
  } catch (err) {
    console.error("Error managing favorites:", err);
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
    const { recipe_name, category_id, instructions, pictures, yt_link, ingredients, measurements } = req.body;

    const updatedRecipe = await pool.query(
      "UPDATE recipes SET recipe_name=$1, category_id=$2, instructions=$3, pictures=$4, yt_link=$5, ingredients=$6, measurements=$7, updated_at=NOW() WHERE recipe_id=$8 RETURNING *",
      [recipe_name, category_id, instructions, pictures, yt_link, ingredients, measurements, id]
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
