var express = require("express");
var bodyParser = require("body-parser");
var Poll = require("../models/poll");

var router = express.Router();
router.use(bodyParser.json({ extended: true, limit: "5mb" }));

router.post('/',(req,res) => {
  console.log("woof");
  console.log(req.body.pollObj);
  console.log(Poll);
  
  Poll.create(req.body.pollObj,(err,poll) => {
    if (err) {
      res.status(500).send(err)
    }
    res.status(200).send(poll);
  })
})

module.exports = router;