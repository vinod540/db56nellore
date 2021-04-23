const mongoose = require("mongoose")
const phoneSchema = mongoose.Schema({
name: String,
brand: String,
cost: {
    type:Number,
    min:1,
    max:100
}
})
module.exports = mongoose.model("Phone", phoneSchema)