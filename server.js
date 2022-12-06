const express = require("express");
const app = express();
const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "1234",
    database: "dvdRental",
    port: 5432,
  },
});

app.set("db", db);

app.get("/", (req, res) => {
  db.select("first_name", "last_name")
    .from("actor")
    .where("first_name", "Christian")
    .andWhere("actor_id", ">", 10)
    .then((actors) => res.send(actors));
});

app.listen(3010, () => console.log("Example app listening on port 3010!"));
