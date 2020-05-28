const express = require("express");
const cors = require("cors");
const {
  getUser,
  getUsers,
  getAccounts,
  getCompanies,
  createUser,
  login,
  deleteUser,
  updateUser,
} = require("./controllers");

const app = new express();
app.use(cors());

app.get("/users", getUsers);
app.get("/user/:id", getUser);
app.put("/user", updateUser);
app.delete("/user/:id", deleteUser);
app.post("/user", createUser);
app.post("/login", login);
app.get("/accounts", getAccounts);
app.get("/companies", getCompanies);

module.exports = app;
