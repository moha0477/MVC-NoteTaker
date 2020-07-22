const mysql = require('mysql');
const util = require('util');

require('dotenv').config();
let host = process.env.DB_HOST
let port = process.env.DB_PORT
let user = process.env.DB_USER
let password = process.env.DB_PASS
let database = process.env.DB_NAME

let connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
 connection = mysql.createConnection({
    host: host,
    port: port,
    user: user,
    password: password,
    database: database
  });
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

connection.query = util.promisify(connection.query);

module.exports = connection;