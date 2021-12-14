const express = require("express");
const app = express();
const morgan = require("morgan");
const logger = require("./logger");
const authorize = require("./authorize");
//req => middleware => res
// app.use("/", [logger, authorize]);
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("products");
});
app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("items");
});

app.listen(5113, () => {
  console.log("SERVER is listening on port 5113...");
});
