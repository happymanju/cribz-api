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
    return res.send(data);
  })
})

app.post("/api/babies", (req, res) => {
  const newBaby = req.body;
  knex('babies').insert(newBaby).then(() => res.send(newBaby)).catch((err) => console.log(err));
})

// app.patch("/api/babies/:name", (req, res) => {
//   const babyUpdates = req.body;

// })

app.delete("/api/babies/:id", (req, res) => {
  const idToDelete = req.body;
  knex('babies').where({id: Number(idToDelete)}).del().then((rows) => {
    return res.send(`${rows} row(s) where deleted.`)
  }).catch((err) => {console.log(err)})
})

app.listen(5000, () => {
    console.log("listening at 5000");
})