const db = require("../config/connect");
const validator = require("../auth/validation");

const getEmployees = (_, res) => {
  db.query("SELECT * FROM employee", (err, result) => {
    if (!err) {
      res.send(result);
    } else {
      res.send({ err });
    }
  });
};

const createEmployee = (req, res) => {
  const eid = null; // * Auto Generated
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const position = req.body.position;
  const salary = req.body.salary;
  const bid = 1;

  const query =
    "INSERT INTO employee (eid, firstName, lastName, position, salary, bid) VALUES (?, ?, ?, ?, ?, ?)";

  const errors = validator(
    [firstName, lastName, position, salary, bid],
    ["firstName", "lastName", "position", "salary", "bid"]
  );

  if (errors.length === 0) {
    db.query(
      query,
      [eid, firstName, lastName, position, salary, bid],
      (err, result) => {
        if (err) {
          res.send({ err });
        } else {
          res.send(result);
        }
      }
    );
  } else {
    res.send({ errors });
  }
};

const deleteEmployee = (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM employee WHERE eid = ?";
  db.query(query, [id], (err, result) => {
    if (err) {
      res.send({ err });
    } else {
      res.send(result);
    }
  });
};

const updateEmployee = (req, res) => {
  const eid = req.body.eid;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const position = req.body.position;
  const salary = req.body.salary;

  const query =
    "UPDATE employee SET firstName = ?, lastName = ?, position = ?, salary = ? WHERE eid = ?";

  const errors = validator(
    [firstName, lastName, position, salary, eid],
    ["firstName", "lastName", "position", "salary", "eid"]
  );

  if (errors.length === 0) {
    db.query(
      query,
      [firstName, lastName, position, salary, eid],
      (err, result) => {
        if (err) {
          res.send({ err });
        } else {
          res.send(result);
        }
      }
    );
  } else {
    res.send({ errors });
  }
};

module.exports = {
  getEmployees,
  createEmployee,
  deleteEmployee,
  updateEmployee,
};
