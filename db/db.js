const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "api",
  password: "Prasanna@1999",
  port: 5432,
});

module.exports = pool;
