var hi = require("lodash")

var worker = function(coll){
  var list = hi.chain(coll)
    .map(function(str) {
      return str + "chained";
    })
    .map(function(str) {
      return str.toUpperCase();
    });

  return list.sort()
}

module.exports = worker;
