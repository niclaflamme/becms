const { constants } = require('buffer');
var express = require('express');
var router = express.Router();
var prisma = require("@prisma/client")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', async function(req, res, next ) {
  const email = req.body.email
  const password = req.body.password

  const user = await prisma.user.findUnique({
    where: {
      email: email
    },
    select: { email: true, 
    password: true, }

  })

 return res.send( user )

});

module.exports = router;
