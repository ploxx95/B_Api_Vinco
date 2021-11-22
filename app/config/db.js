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
const sql_create = `CREATE TABLE IF NOT EXISTS User(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, 
                    name VARCHAR (100) NOT NULL, role VARCHAR (100) NOT NULL,
                    course INTEGER, score REAL, age TEXT )`;
db.run(sql_create, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Table user succefull appended");
  }
});
exports.db = db;
