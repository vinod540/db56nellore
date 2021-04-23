var express = require('express');
const phone_controllers = require('../controllers/phone');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }

/* GET home page. */
router.get('/', phone_controllers.phone_view_all_Page);

/* GET detail phone page */
router.get('/detail', phone_controllers.phone_view_one_Page);

/* GET create phone page */
router.get('/create', secured, phone_controllers.phone_create_Page);

/* GET create update page */
router.get('/update', secured, phone_controllers.phone_update_Page);

/* GET create phone page */
router.get('/delete', secured, phone_controllers.phone_delete_Page);
module.exports = router;



