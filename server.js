const express = require("express");
const app = express();
const my_dataBase = require("./app/config/db");
const bodyParser = require("body-parser");
const userRouter = require("./app/routes/user");
// parse application/json
app.use(bodyParser.json({ limit: "20mb" }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

app.use(userRouter);

app.listen(3000, () => {
  console.log("Escuchando el puertos ", 3000);
});
