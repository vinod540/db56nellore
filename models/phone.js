const mongoose = require("mongoose")
const phoneSchema = mongoose.Schema({
name: {
    type: String,
    minLength: 5
    },
brand: String,
cost: {
    type:Number,
    min:1,
    max:100
}
})
module.exports = mongoose.model("Phone", phoneSchema)