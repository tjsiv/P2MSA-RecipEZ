require('dotenv').config();
const Pool = require("pg").Pool;

// Create a new pool instance using DATABASE_URL
const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // Use DATABASE_URL provided by Railway
    ssl: {
        rejectUnauthorized: false // Necessary for external connections in some cases
    }
});

module.exports = pool;