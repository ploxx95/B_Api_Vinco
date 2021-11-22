const data_base = require("../config/db");
const { httpError } = require("../helpers/handleError");
//get All User
exports.getData = (req, res) => {
  sql_get = "SELECT * FROM User ORDER BY name";
  data_base.db.all(sql_get, (err, rows) => {
    if (err) {
      httpError(res, err.message);
    } else {
      console.log(rows);
      res.send({ data: rows });
    }
  });
};

//create User
exports.postData = (req, res) => {
  const sql_post = "INSERT INTO User(name) VALUES(?)";
  const newUser = [req.body.name];
  data_base.db.run(sql_post, newUser, (err) => {
    if (err) {
      httpError(res, err.message);
    } else {
      res.send({ data: newUser });
    }
  });
};
// get one User
exports.getDataById = (req, res) => {
  const ID = req.params.id;
  sql_get = `SELECT * FROM User WHERE id = ?`;
  data_base.db.get(sql_get, ID, (err, rows) => {
    if (err) {
      httpError(res, err.message);
    } else {
      console.log(rows);
      res.send({ data: rows });
    }
  });
};

//EDIT User
exports.editData = (req, res) => {
  const ID = req.params.id;
  const user_data = [req.body.name, ID];
  sql_edit = `UPDATE User SET name=? WHERE (id=?)`;
  data_base.db.run(sql_edit, user_data, (err, rows) => {
    if (err) {
      httpError(res, err.message);
      console.log(err.message);
    } else {
      console.log(rows);
      res.send({ data: user_data });
    }
  });
};

//Delete User
exports.deleteData = (req, res) => {
  const ID = req.params.id;
  sql_delete = `DELETE FROM User WHERE id=?`;
  data_base.db.run(sql_delete, ID, (err, rows) => {
    if (err) {
      httpError(res, err.message);
    } else {
      res.send("User Eliminado");
    }
  });
};
