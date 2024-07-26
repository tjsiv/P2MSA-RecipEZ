// routes/favorites.js
const express = require('express');
const router = express.Router();
const pool = require('../db'); // Adjust the path as necessary

// Delete a favorite recipe
router.delete("/", async (req, res) => {
  const { user_id, recipe_id } = req.body;

  try {
    const deleteFavorite = await pool.query(
      "DELETE FROM favorites WHERE user_id = $1 AND recipe_id = $2 RETURNING *",
      [user_id, recipe_id]
    );

    if (deleteFavorite.rowCount === 0) {
      return res.status(404).json({ error: "Favorite recipe not found" });
    }

    res.json({ message: "Recipe removed from favorites" });
  } catch (err) {
    console.error("Error removing favorite recipe:", err);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
