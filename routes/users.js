var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/yangjun', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
