const mongoose = require("mongoose");

const BannerModel = mongoose.model('Banner', mongoose.Schema({
    title: String,
    subtitle: String,
    link: String,
    img: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
}))

const UserModel = mongoose.model('User', mongoose.Schema({
    title: String,
    subtitle: String,
    link: String,
    img: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
}))

const CategoryModel = mongoose.model('Category', mongoose.Schema({
    value: String,
    text: String,
    type: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
}))

const ProductModel = mongoose.model('Product', mongoose.Schema({
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
}))

module.exports = {BannerModel, UserModel, CategoryModel, ProductModel}