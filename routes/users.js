var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');

});

router.post('/signup', function(req, res, next) {
  // console.log('Request', req);
  res.send('I am here');
  



});


module.exports = router;
