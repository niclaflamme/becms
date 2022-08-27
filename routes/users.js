var express = require('express');
const bcrypt = require('bcryptjs')

var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', function(req, res, next) {
  var password = req.body.password;
  const hash = saltHash(password);
  res.send({ hash });
});

function saltHash(password){
  const salt = bcrypt.genSaltSync(12)
  const hash = bcrypt.hashSync(password, salt);

  return hash
}
module.exports = router;
