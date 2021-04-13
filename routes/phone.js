var express = require('express');
const phone_controllers = require('../controllers/phone');
var router = express.Router();

/* GET home page. */
router.get('/', phone_controllers.phone_view_all_Page);

module.exports = router;

/* GET detail phone page */
router.get('/detail', phone_controllers.phone_view_one_Page);

/* GET create phone page */
router.get('/create', phone_controllers.phone_create_Page);

/* GET create update page */
router.get('/update', phone_controllers.phone_update_Page);

/* GET create phone page */
router.get('/delete', phone_controllers.phone_delete_Page);



