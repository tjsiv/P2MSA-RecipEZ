//require pool for performance
require('dotenv').config()
const Pool = require("pg").Pool

// create a new pool instance with the given configuration
const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
})

module.exports = pool;