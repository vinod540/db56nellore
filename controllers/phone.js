var Phone = require('../models/phone');

// List of all Phones

exports.phone_list = async function(req, res) {
    try {
        thePhones = await Phone.find();
        res.send(thePhones);
    } catch (err) {
        res.error(500, `{"error": ${err}}`);
    }

};

// for a specific Phones.
exports.phone_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Phone detail: ' + req.params.id);
};

// Handle Costume create on POST.
exports.phone_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Phone();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costumetype":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.cost = req.body.cost;
    document.brand = req.body.brand;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.error(500, `{"error": ${err}}`);
    }
};


// Handle Phones delete form on DELETE.
exports.phone_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Phone delete DELETE ' + req.params.id);
};
// Handle Phones update form on PUT.
exports.phone_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Phone update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.phone_view_all_Page = async function(req, res) {
    try {
        thePhones = await Phone.find();
        res.render('phone', { title: 'Phones Search Results', results: thePhones });
    } catch (err) {
        res.error(500, `{"error": ${err}}`);
    }
};