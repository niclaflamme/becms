const express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
  res.status(200).send({ success: true })
});

router.get('/authenticated', function(req, res) {
  res.status(200).send({ success: true })
});

module.exports = router;
