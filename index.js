
let express = require('express');
let fs = require('fs');
let config = require('./config.js');
let controller = require('./loader.js');

let app = express();
app.use(express.static('./' + config.page_path));
app.listen(config.port, function () {
  console.log('服务已启动')
})

app.post('/createEveryDay', function (req, res) {
  console.log(123);
  if (controller.get('/createEveryDay')) {
    console.log(234);
    controller.get('/createEveryDay')(req, res);
  }
})
