

const { Pool } = require("pg");

module.exports = new Pool({
    host: "localhost",
    user: "oskarstromberg",
    database: "members-only",
    password: "test123",
    port: 5432
})
