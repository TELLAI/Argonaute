const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
const pg = require("pg");
const { Pool, Client } = require("pg");


const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "argonaute",
  password: "Plasma2020@",
  port: 5432,
});

const conString =
  "postgres://postgres:Plasma2020@@postgres:5432/argonaute";

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("hello man !!!")
})

app.post("/add", async (req, res) => {
    const {name} = req.body
    
    try {
        const result = await pool.query(`INSERT INTO equipage (username) VALUES ($1);`, [name])
        res.json(result)
    }catch(err){
        console.log(err)
    }
})

app.get("/users/:name/:password", async (req, res) => {

    const {
        name,
        password
    } = req.params

    try {
        const client = await pool.connect()
        const result = await client.query(
          `SELECT * FROM membres WHERE USERNAME LIKE $1 AND PASSWORD LIKE $2;`,[name], [password]
        );
        console.log(req.params.password)
        res.json(result.rows)
        client.end()
    }catch(err){
        console.log(err)
    }

    //  pg.connect(conString, function (err, client, done) {
    //    if (err) {
    //      done();
    //      console.log(err);
    //      return res.status(500).json({ success: false, data: err });
    //    }
    //    client.query("SELECT * FROM membres", [], function (err, result) {
    //      //call `done()` to release the client back to the pool
    //      done();

    //      if (err) {
    //        return res.status(500).json({ success: false, data: err });
    //      }

    //      // return results as json object
    //      return res.json(result.rows);
    //    });
    //  });


});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
