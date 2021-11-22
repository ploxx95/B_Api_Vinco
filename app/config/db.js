const sqlite3 = require("sqlite3").verbose();
const path = require("path");

//Data Base connect
const db_file = path.join(__dirname, "..", "db", "data_base.db");
const db = new sqlite3.Database(db_file, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("DATA BASE CONNECT");
  }
});

// Create Table if not Exist
const sql_create = `CREATE TABLE IF NOT EXISTS User(User_Id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, Name VARCHAR (100) NOT NULL)`;
db.run(sql_create, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Table user succefull appended");
  }
});
exports.db = db;