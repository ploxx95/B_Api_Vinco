const data_base = require("../config/db");

exports.getData = (req, res) => {
  sql_get = "SELECT * FROM User ORDER BY Name";
  data_base.db.all(sql_get, (err, rows) => {
    if (err) {
      console.log("ERROR to get Data");
    } else {
      console.log(rows);
      res.send({ data: rows });
    }
  });
};

exports.postData = (req, res) => {
  const sql_post = "INSERT INTO User(Name) VALUES(?)";
  const newUser = [req.body.Name];
  data_base.db.run(sql_post, newUser, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ data: newUser });
    }
  });
};
