var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.get("/", (req, res) =>
  res.send("Hello Wfrom nodejs cognito authentication server")
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var routes = require("./routes/routes");
app.use("/", routes);
module.exports = app;
