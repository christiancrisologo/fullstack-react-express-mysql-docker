const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const errorHandlers = require("./errorHandlers");

const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(routes);
app.use(errorHandlers);

module.exports = app;
