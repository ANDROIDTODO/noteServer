var express = require('express');
var router = express.Router();

var json = "{'value':'http://120.25.168.81/images/welcome2.png','name':'welcome2','type':1}"


/* GET users listing. */
router.get('/ad', function(req, res, next) {
  res.send(json);
});

module.exports = router;
