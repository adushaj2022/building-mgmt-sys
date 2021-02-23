const { json } = require("express");
const db = require("../config/connect");
const bcrypt = require("bcrypt");
const validator = require("../auth/validation");
const e = require("express");

const register = async (req, res) => {
  const { username, password } = req.body;

  const errors = validator([username, password], ["username", "password"]);

  if (errors.length !== 0) {
    res.send({ errors });
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  //Check if username is taken

  db.query("SELECT * FROM user WHERE username = ?", [username], (_, result) => {
    try {
      if (result?.length >= 1) {
        res.send({
          errors: [{ field: "username", message: "Username is already taken" }],
        });
        return;
      }
    } catch (err) {
      throw err;
    }

    const query = "INSERT INTO user (username, password) VALUES (?,?)";

    db.query(query, [username, hashedPassword], (_, result) => {
      try {
        req.session.userId = result[0].id;
        res.send({ result });
      } catch (err) {
        res.send({ err });
      }
    });
  });
};
const login = (req, res) => {
  const { username, password } = req.body;

  console.log(req.body);
  const errors = validator([username, password], ["username", "password"]);

  if (errors.length !== 0) {
    res.send({ errors });
    return;
  }

  db.query(
    "SELECT * FROM user WHERE username = ?",
    [username],
    async (err, result) => {
      try {
        if (result?.length === 1) {
          console.log(result[0]);
          const match = await bcrypt.compare(password, result[0].password);
          if (match) {
            req.session.userId = result[0].id;
            res.send({
              user: { username: result[0].username, id: result[0].id },
              status: true,
            });
            return;
          } else {
            res.send({
              errors: [
                { field: "username", message: "username does not exist" },
              ],
            });
          }
        } else {
          res.send({
            errors: [
              { field: "username", message: "Wrong combination" },
              { field: "password", message: " " },
            ],
          });
        }
      } catch (err) {
        res.send({ err });
      }
    }
  );
};
const logout = (req, res) => {
  new Promise((resolve) =>
    req.session.destroy((err) => {
      if (err) {
        console.error(err);
        resolve(false);
        res.send(false);
        return;
      }

      res.clearCookie("qid");
      res.send(true);
      resolve(true);
    })
  );
};

//get current user
const me = (req, res) => {
  const id = req.session.userId;
  let user = null;
  db.query("SELECT * FROM user WHERE id = ?", [id], (err, result) => {
    if (result.length === 1) {
      user = { username: result[0].username, id: result[0].id, status: true };
      res.send({ user });
    } else if (err) {
      res.status(500).send({ err });
    } else {
      res.send({ status: false });
    }
  });
};

module.exports = { register, login, logout, me };
