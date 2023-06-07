const express = require("express");
const pino = require("express-pino-logger")();
const app = express();
// const knex = require("../db/knex");
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(pino);

app.get("/", (req, res) => res.send("Give me request!!!"));

// app.get("/api/greeting", (req, res) => {
//   const name = req.query.name || "World";
//   res.setHeader("Content-Type", "application/json");
//   res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
// });

app.listen(PORT, () => {
  console.log(`Express server is running on localhost:${PORT}`);
});

// app.listen(PORT, () => {
//     console.log(`Server is running ${PORT} !`);
//   });
