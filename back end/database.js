const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "ghghgh",
    host: "localhost",
    port: 5432,
    database: "cardealership_database"
});
module.exports = pool;