const express = require("express");

const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("HII THERE");
});
app.listen(port, (req, res) => {
  console.log("server is running at port ", port);
});
