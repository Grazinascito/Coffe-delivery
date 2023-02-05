require("dotenv").config({ path: __dirname + "/.env" });

const express = require("express");
const connect = require("./db/connect");
const routes = require("./routes/routes");

const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
connect();

app.listen(3000, () => {
  console.log("server up and fire 🔥");
});
