// orm.js file
var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];
       for (var i = 0; i < num; i++) {
      arr.push("?");
    }
       return arr.toString();
   };

   function objToSql(ob) {
    var arr = [];
       // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
         if (Object.hasOwnProperty.call(ob, key)) {
               if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
               arr.push(key + "=" + value);
      }
    }
   }
   return arr.toString();


module.exports = orm;