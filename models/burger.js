// models burger.js done

var orm = require("../config/orm.js");


var burgers = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    create: function(cols, vals, cb) {
      orm.create("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(condition, cb) {
      orm.update("burgers", {devoured:true}, condition, function(res) {
        cb(res);
      });
    },
  };
  
  // Export the database functions for the controller.
  module.exports = burgers;