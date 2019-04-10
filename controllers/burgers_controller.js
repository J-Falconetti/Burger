// burges controller.js 
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

// Import the model to use its database functions.

router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
      // res.json(data)
    });
  });
  router.post("/api/burgers", function(req, res) {
    burger.create([
      "name"
    ], [
      req.body.name
    ], function(result) {
      res.json({ id: result.insertId });
    });
  });
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id=" + req.params.id;
  
    console.log("condition", condition);

    burger.update(
     
    
    condition, function(result) {
      if (result.changedRows == 0) {
        
        return res.status(404).end();
      } 
      else {
        res.status(200).end();
      }
    });
  });
  module.exports = router