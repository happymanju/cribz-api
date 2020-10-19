const express = require("express");


const knex = require('knex')({
    client: 'postgres',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'manjuforever',
      database : 'cribz'
    }
  });

const app = express();

app.use(express.static("./"));

app.get("/api/babies", (req, res) => {
    const limit = req.query.limit || null;

    const result = knex("babies").select().limit(limit);
    res.send(result);
});

// app.post("/babies/add/:params", (req, res) => {

// })

// app.patch("/babies/;idOrName", (req, res) => {

// })

// app.delete("/babies/:idOrName", (req, res) => {

// })

app.listen(5000, () => {
    console.log("listening at 5000");
})