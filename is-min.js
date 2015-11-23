var hi = require("lodash")

var worker = function(coll){
  var result = { 'hot' : [],
                 'warm' : [] }

  function higher19(num) {
    return num > 19
  }

  hi.forEach(coll, function(temps, town) {
    if (hi.every(temps, higher19)) {
      result.hot.push(town)
    } else if (hi.some(temps, higher19)) {
      result.warm.push(town)
    }
  })
  return result
}

module.exports = worker;
