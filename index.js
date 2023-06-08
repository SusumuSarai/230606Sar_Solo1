const express = require("express");
const pino = require("express-pino-logger")();
const knex = require("./db/knex");
const app = express();
// const knex = require("../db/knex");
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(pino);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});

app.get("/", (req, res) => res.send("Give me request!!!"));

app.get("/list", async (req, res) => {
  // const allPlayList = await knex.select("*").from("playlist");
  const allPlayList = await knex
    .select({
      id: "id",
      player: "player",
      grade: "grade",
      title: "title",
      composer: "composer",
      playerNumber: "playerNumber",
      generalComment: "generalComment",
      studentComment: "studentComment",
      teacherComment: "teacherComment",
    })
    .from("playlist");
  // console.log(allPlayList);
  res.set("content-type", "application/json").status(200).send(allPlayList);
});

app.listen(PORT, () => {
  console.log(`Express server is running on localhost:${PORT}`);
});

// app.listen(PORT, () => {
//     console.log(`Server is running ${PORT} !`);
//   });
