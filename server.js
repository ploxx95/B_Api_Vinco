const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hola");
});
app.listen(3000, () => {
  console.log("Escuchando el puertos ", 3000);
});
