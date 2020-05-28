const express = require("express");
const app = express();

function send(res, result, status = 200) {
  res.status(status);
  res.send(result);
}

app.use((req, res) => {
  send(res, { status: 404, error: "page not found" }, 404);
});

app.use((req, res) => {
  send(res, { status: 500, error: "Internal Server Error'" }, 500);
});

module.exports = app;
