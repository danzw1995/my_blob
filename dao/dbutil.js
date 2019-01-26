let mysql = require('mysql');

function createConnect() {
  let connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    username: 'root',
    password: '123456',
    database: 'my_blob'
  })
  return connection;
}

module.exports = createConnect;