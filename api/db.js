//require pool for performance
const Pool = require("pg").Pool

// create a new pool instance with the given configuration
const pool = new Pool({
    user: "postgres",
    password: "XJ0461BRu!s3R",
    host: "localhost",
    port: 5432,
    database: "mernrecipes"
})

module.exports = pool;