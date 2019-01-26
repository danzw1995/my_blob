
let createConnection = require('./dbutil.js');

function createEveryDay(content, ctime) {
  let mysql = createConnection();
  let sql = "insert into every_day ( `content`, `ctime` ) values ( ?, ? )";
  let params = [content, ctime];

  mysql.connect();
  console.log(params);
  mysql.query(sql, params, function(err, result) {
    if (err == null) {
      console.log(result)
    } else {
      console.log(err);
    }
  })
  mysql.end();
}

exports.createEveryDay = createEveryDay;
