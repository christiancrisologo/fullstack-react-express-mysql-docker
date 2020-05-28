const dbPool = require("./db");

function send(res, result, status = 200) {
  return Promise.resolve().then(() => res.status(status).send({ result }));
}

const login = async (req, res) => {
  const result = await dbPool.query(
    "SELECT * FROM users WHERE email = ? AND (password = ?)",
    [req.body.email, req.body.password]
  );
  return send(res, result);
};

const getUsers = async (req, res) => {
  const result = await dbPool.query("SELECT * FROM users");
  return send(res, result);
};

const getUser = async (req, res) => {
  const result = await dbPool.query("SELECT * FROM users WHERE id = ?", [
    req.body.id || req.param.id,
  ]);
  return send(res, result);
};

const createUser = (req, res) => {
  const body = req.body;
  return dbPool.query(
    "INSERT INTO users (first_name, last_name, email, password, location, created_at) VALUES (?)",
    [
      [
        body.first_name || "",
        body.last_name || "",
        body.email || "",
        body.password || "",
        body.location || "",
        new Date(),
      ],
    ],
    (err, result) => {
      if (err) {
        return send(res, { error: "Error on insert record", details: err });
      }
      return send(res, { id: result.insertId });
    }
  );
};

const updateUser = async (req, res) => {
  const body = req.body;
  const user = await dbPool.query("SELECT * FROM users WHERE id = ?", [
    req.body.id || req.param.id,
  ]);
  if (!user || !user.length) {
    return send(res, { error: "User doesn't exist!" });
  }

  return dbPool.query(
    "UPDATE users SET first_name = ? , last_name = ? , email = ? , password = ? , location = ? , update_at = ? WHERE id = ? ",
    [
      body.first_name || "",
      body.last_name || "",
      body.email || "",
      body.password || "",
      body.location || "",
      new Date(),
      body.id,
    ],
    (err, result) => {
      if (err) {
        return send(res, { error: "Error on insert record", details: err });
      }
      return send(res, "Update success!");
    }
  );
};

const deleteUser = async (req, res) => {
  const user = await dbPool.query("SELECT * FROM users WHERE id = ?", [
    req.body.id || req.param.id,
  ]);
  if (!user || !user.length) {
    return send(res, { error: "User doesn't exist!" });
  }
  return dbPool.query(
    "DELETE FROM users WHERE id = ?",
    [req.body.id || req.param.id],
    (err, result) => {
      if (err) {
        return send(res, { error: "Error on delete record", details: err });
      }
      return send(res, "Delete success");
    }
  );
};

const getAccounts = async (req, res) => {
  const rows = await dbPool.query("SELECT * FROM accounts");
  send(res, { result: JSON.stringify(rows) });
};
const getCompanies = async (req, res) => {
  const rows = await dbPool.query("SELECT * FROM companies");
  send(res, { result: JSON.stringify(rows) });
};

module.exports = {
  login,
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  deleteUser,
  getAccounts,
  getCompanies,
};
