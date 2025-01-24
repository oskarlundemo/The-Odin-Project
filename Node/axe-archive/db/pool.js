



const { Pool } = require("pg");

module.exports = new Pool({
    host: "localhost",
    user: "oskarstromberg",
    database: "Axe Archive",
    password: "test123",
    port: 5432
});