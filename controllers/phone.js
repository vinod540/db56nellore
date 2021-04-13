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

// for a specific Phone.
exports.phone_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await Phone.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
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


// Handle Phone delete on DELETE.
exports.phone_delete = async function(req, res) {
    console.log("delete "  + req.params.id)
    try {
        result = await Phone.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};


// Handle Phone update form on PUT.
exports.phone_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Phone.findById( req.params.id)
        // Do updates of properties
        if(req.body.name) toUpdate.name = req.body.name;
        if(req.body.brand) toUpdate.brand = req.body.brand;
        if(req.body.cost) toUpdate.cost = req.body.cost;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
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

// Handle a show one view with id specified by query
exports.phone_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await Phone.findById( req.query.id)
        res.render('phonedetail', 
{ title: 'Phone Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a phone.
// No body, no in path parameter, no query.
// Does not need to be async
exports.phone_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('phonecreate', { title: 'Phone Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

