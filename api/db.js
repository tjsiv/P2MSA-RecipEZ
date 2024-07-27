//require pool for performance
require('dotenv').config()
const Pool = require("pg").Pool

// Create a new pool instance using DATABASE_URL
const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // Use DATABASE_URL provided by Railway
    ssl: {
        rejectUnauthorized: false // Necessary for external connections in some cases
    }
});

// const poolConfig = {
//     max: 5,
//     min: 2,
//     idleTimeoutMillis: 60000,
// }

// const DataBase = process.env.DB_NAMEl
// const UserName = process.env.DB_USER;
// const Password = process.env.DB_PASSWORD;
// const Host = process.env.DB_HOST;
// const Port = process.env.DB_PORT;

// poolConfig.database = `postgres://${UserName}:${Password}@${Host}:${Port}/${DataBase}`


// // create a new pool instance with the given configuration
// const pool = new Pool({
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     database: process.env.DB_NAME
// })

module.exports = pool;