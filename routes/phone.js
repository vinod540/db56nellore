var express = require('express');
const phone_controllers = require('../controllers/phone');
var router = express.Router();

/* GET home page. */
router.get('/', phone_controllers.phone_view_all_Page);

module.exports = router;

