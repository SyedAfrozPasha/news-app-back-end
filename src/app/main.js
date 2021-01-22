const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userRouter = require("./routes/news.route");
const countryRouter = require("./routes/country.route");
const categoryRouter = require("./routes/category.route");

// Handling CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(bodyParser.json());

app.use(userRouter);
app.use(countryRouter);
app.use(categoryRouter);

module.exports = app;
