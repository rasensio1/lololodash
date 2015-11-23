var hi = require("lodash")

var worker = function (coll) {

  var grouped = hi.groupBy(coll, 'article');

  function reduced(total, value, key) {
    total += value.quantity;
    return total;
  };

  var results = [];
  hi.forEach(grouped, function(value, key) {
    results.push({article: parseInt(key), total_orders: hi.reduce(value, reduced, 0)})
  });

  return hi.sortBy(results, 'total_orders').reverse();
};

module.exports = worker;
