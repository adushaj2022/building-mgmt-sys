const db = require("../config/connect");

const getResidents = (_, res) => {
  db.query("SELECT * FROM resident", (err, result) => {
    if (!err) {
      res.send(result);
    } else {
      res.send(err);
    }
  });
};

module.exports = { getResidents };
