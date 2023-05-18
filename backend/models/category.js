const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
    value: String,
    text: String,
    type: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('Category', CategorySchema)