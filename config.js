let fs = require('fs');
let data = fs.readFileSync('./service.conf');
let config = {};

data.toString().split('\r\n').forEach(item => {
  let [k, v] = item.split('=');
  config[k] = v;
});

module.exports = config;