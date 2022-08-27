var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/signup", function(req, res, next){
  // 1 get usernamre, pasword 
  
  
  var email = req.body.email
  var password = req.body.password




  // submit to database
  // send jwt tokens

})

module.exports = router;
