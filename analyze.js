var hi = require("lodash")

var worker = function (coll) {

  function reduce(agg, obj) {
    agg += obj.income;
    return agg;
  }

  var avg = hi.reduce(coll, reduce, 0) / hi.size(coll)

  function underperform(obj) {
    return obj.income <= avg
  };

  function overperform(obj) {
    return obj.income > avg
  };

  var underp = hi.filter(coll, underperform);
  var overp  = hi.filter(coll, overperform);

  function getName(obj) {
    return obj.name;
  };

  
  return {'average': avg,
          'underperform': hi.sortBy(underp, 'income'),
          'overperform': hi.sortBy(overp, 'income')}

};

module.exports = worker;
