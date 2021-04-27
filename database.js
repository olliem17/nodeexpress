var mysql = require("mysql");
var config = require('./config.js');

var conn = mysql.createConnection({
  host: config.DBHOST,
  port: config.DBPORT,
  user: config.DBUSER,
  password: config.DBPASS,
  database: config.DB,
});

conn.connect(function (err) {
  if (err) throw err;
  console.log("Database is connected successfully !");
});

module.exports = conn;




