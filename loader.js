let fs = require('fs');
let config = require('./config.js');
let map = new Map();

let dirs = fs.readdirSync(`./${config.web_path}`)
dirs.forEach(function (path) {
  for (let [k, v] of require(`./${config.web_path}/${path}`)) {
    if (map.get(k) == null) {
      map.set(k, v);
    } else {
      throw new Error('config error');
    }
  }
});
module.exports = map;