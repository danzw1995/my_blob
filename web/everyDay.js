let config = require('./../config.js');
let timeUtil = require('./timeUtil'); 
let map = new Map();

let everyDayController = require(`../${config.dao_path}/everyDayDao.js`);

// for (let [k, v] in everyDayController) {
//   if (map.get(k) == null) {
//     map.set(k, v);
//   }
// }

function createEveryDay(req, res) {
  req.on('data', function (data) {
    everyDayController.createEveryDay(data.toString().trim(), timeUtil.getCurTime(), function (result) {
      res.writeHead(200);
      res.write(result);
      res.end();
    });
  })
}
map.set('/createEveryDay', createEveryDay);
module.exports = map;