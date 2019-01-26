function getCurTime() {
  return new Date().getTime();
}

var map = new Map();
map.getCurTime = getCurTime;

module.exports = map;