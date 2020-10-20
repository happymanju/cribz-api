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
app.use(express.json());

app.get("/api/babies", (req, res) => {
    const result = knex("babies").select().then((data) =>{
      return res.send(data)
    })
});

app.get("/api/babies/:name", (req, res) => {
  const name = req.params.name;
  const result = knex('babies').select().where({full_name:name}).then((data) => {
    console.log(data);
    return res.send(data);
  })
})

app.post("/api/babies", (req, res) => {
  const newBaby = {full_name: req.body.full_name, gender: req.body.gender};
  knex('babies').insert(newBaby).then((res) => {
    console.log(newBaby);
    return res.send(newBaby);
  })
})

// app.patch("/api/babies/:idOrName", (req, res) => {

// })

// app.delete("/api/babies/:idOrName", (req, res) => {

// })

app.listen(5000, () => {
    console.log("listening at 5000");
})