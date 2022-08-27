const express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
  res.status(204).send();
});

router.get('/authenticated', function(req, res) {
  res.status(204).send();
});

module.exports = router;
