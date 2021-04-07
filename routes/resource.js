var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var phone_controller = require('../controllers/phone');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Phone.
router.post('/resource/phones', phone_controller.phone_create_post);
// DELETE request to delete phone.
router.delete('/resource/phones/:id', phone_controller.phone_delete);
// PUT request to update Phone.
router.put('/resource/phones/:id', phone_controller.phone_update_put);
// GET request for one Phone.
router.get('/resource/phones/:id', phone_controller.phone_detail);
// GET request for list of all Phone items.
router.get('/resource/phones', phone_controller.phone_list);
module.exports = router;