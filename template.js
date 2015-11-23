var hi = require("lodash")

var worker = function (obj) {

  function logins(thing) {
    return hi.size(thing.login)
  }

  var a = hi.template('Hello <%= name %> (logins: <%= logins  %>)');

  var displayObj = { name: obj.name,
                    logins: logins(obj) }

  return a(displayObj);
};

module.exports = worker;
