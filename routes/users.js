var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs')
/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', function(req, res, next) {
  console.log(req.body.password);
  var pass = req.body.password;
  const hashPass = saltHash(pass);
  res.send('hashed', hashPass);

});

function saltHash(pass){
  console.log('pass in hashPass is ', pass)
  const saltRounds = 12;
  bcrypt.genSalt(saltRounds, function(err, salt) {
    console.log('salt', salt);
    bcrypt.hash(pass, salt, function(err, hash) {

    // returns hash
    console.log('hash', hash);
    return hash;
    });
  });
}
module.exports = router;