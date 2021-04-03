var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('phone', { title: 'Search Results phone' });
});

module.exports = router;