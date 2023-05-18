const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    name: String,
    orders: Number,
    liked: Boolean,
    sizes: [],
    img: String,
    price: Number,
    discount: Number,
    gender: String,
    category: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

module.exports =  mongoose.model('Product', ProductSchema);