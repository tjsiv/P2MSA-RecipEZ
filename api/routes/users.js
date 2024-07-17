const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const pool = require("../db"); // Assuming you have configured PostgreSQL connection

// Register a new user
router.post("/register", async (req, res) => {
  const { username, password, email } = req.body;

  try {
    // Check if username or email already exists
    const existingUser = await pool.query("SELECT * FROM users WHERE username = $1 OR email = $2", [username, email]);

    if (existingUser.rows.length > 0) {
      return res.status(400).json({ message: "Username or email already exists" });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Insert new user into the database
    const newUser = await pool.query(
      "INSERT INTO users (username, password_hash, email) VALUES ($1, $2, $3) RETURNING user_id, username, email, created_at",
      [username, hashedPassword, email]
    );

    res.status(201).json(newUser.rows[0]);
  } catch (err) {
    console.error("Error registering user:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

// Login user
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Retrieve user from database
    const user = await pool.query("SELECT * FROM users WHERE username = $1", [username]);

    if (user.rows.length === 0) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Verify password
    const passwordMatch = await bcrypt.compare(password, user.rows[0].password_hash);

    if (!passwordMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Passwords match, user authenticated
    res.json({ message: "Login successful", user: user.rows[0] });
  } catch (err) {
    console.error("Error logging in user:", err);
    res.status(500).json({ message: "Server Error" });
  }
});


module.exports = router;
