var hi = require("lodash")

var worker = function (coll) {

  var results = [];
  var grouped = hi.groupBy(coll, 'username');

  hi.forEach(grouped, function (value, key) {
    results.push( {username: key, comment_count: hi.size(value)});
  });

  return hi.sortBy(results, 'comment-count').reverse();

}

module.exports = worker;
