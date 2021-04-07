const mongoose = require("mongoose")
const phoneSchema = mongoose.Schema({
    name: String,
    brand: String,
    cost: Number
})
module.exports = mongoose.model("Phone", phoneSchema)