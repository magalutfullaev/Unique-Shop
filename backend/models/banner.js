const mongoose = require("mongoose");

const BannerSchema = mongoose.Schema({
    title: String,
    subtitle: String,
    link: String,
    img: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('Banner', BannerSchema);