const { Pool, Client } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "argonaute",
  password: "Plasma2020@",
  port: 5432,
});

pool.connect(async (err) => {
  if (err) throw err;
  else {
    await queryDatabase();
  }
});

function queryDatabase() {
  const query = `
        SELECT * FROM membres
    `;

  const result = pool
    .query(query)
    .then(() => {
      console.log(result);
      pool.end(console.log("Closed client connection"));
    })
    .catch((err) => console.log(err))
    .then(() => {
      console.log("Finished execution, exiting now");
      process.exit();
    });
}