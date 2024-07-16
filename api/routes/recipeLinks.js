var express = require('express');
var router = express.Router();
// import database connection from db file
var pool = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/recipes", async(req, res) => {
  try{
    // insert a new recipe into the database as a test for connection with postman
    const { title, description} = req.body;
    const newRecipe = await pool.query("INSERT INTO recipe (title, description) VALUES($1, $2) RETURNING *", 
      [title, description]);

      //only return relevant results of query
      res.json(newRecipe.rows[0]);
  } catch(err){
    console.error(err);
    res.status(500).send("Server Error"); 
  }
})

//pull all recipes from a sql table
router.get("/recipes", async(req, res) => {
  try{
    // get all recipes from the database
    const allRecipes = await pool.query("SELECT * FROM recipe");

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
router.put("/recipes/:id", async(req, res) => {
  try{
    // update a recipe by id in the database
    const { id } = req.params;
    const { title, description } = req.body;
    const updatedRecipe = await pool.query(
      "UPDATE recipe SET title=$1, description=$2 WHERE recipe_id=$3 RETURNING *", 
      [title, description, id]
    );

    // only return relevant results of query
    res.json(updatedRecipe.rows[0]);
  } catch(err){
    console.error(err);
    res.status(500).send("Server Error"); 
  }
})

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
