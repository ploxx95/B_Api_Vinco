require("./app/config/config");
const express = require("express");
const cors = require("cors");
const app = express();
const my_dataBase = require("./app/config/db");
const bodyParser = require("body-parser");
const userRouter = require("./app/routes/user");

app.use(cors());
// parse application/json
app.use(bodyParser.json({ limit: "20mb" }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

app.use(userRouter);

app.listen(process.env.PORT, () => {
  console.log("Escuchando el puertos ", 3001);
});
