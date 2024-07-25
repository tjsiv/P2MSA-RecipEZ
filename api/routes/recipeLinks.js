var express = require('express');
var router = express.Router();
// import database connection from db file
var pool = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/find', async (req, res) => {
  const userId = req.query.user_id;
  console.log("User ID:", userId); // Corrected log statement
  try {
    const allFavorites = await pool.query("SELECT recipe_id FROM favorites WHERE user_id = $1", [userId]);
    console.log("Favorites Query Result:", allFavorites.rows); // Log the query result
    res.json(allFavorites.rows.map(row => row.recipe_id)); // Return an array of recipe IDs
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error"); // 500 Internal Server Error
  }
});

//favorite a recipe from button
router.post("/favorites", async (req, res) => {
  const { user_id, recipe_id } = req.body;

  try {
    // Check if the favorite already exists for the user
    const existingFavorite = await pool.query(
      "SELECT * FROM favorites WHERE user_id = $1 AND recipe_id = $2",
      [user_id, recipe_id]
    );

    if (existingFavorite.rows.length > 0) {
      // If favorite exists, remove it (unfavorite)
      await pool.query(
        "DELETE FROM favorites WHERE user_id = $1 AND recipe_id = $2",
        [user_id, recipe_id]
      );

      return res.json({ message: "Recipe removed from favorites" });
    } else {
      // Insert into favorites table
      const newFavorite = await pool.query(
        "INSERT INTO favorites (user_id, recipe_id) VALUES ($1, $2) RETURNING *",
        [user_id, recipe_id]
      );

      return res.json({ favorite: newFavorite.rows[0], message: "Recipe added to favorites" });
    }
  } catch (err) {
    console.error("Error managing favorites:", err);
    res.status(500).json({ error: "Server Error" });
  }
});





module.exports = router;
