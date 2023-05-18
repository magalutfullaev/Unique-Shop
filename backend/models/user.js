const mongoose = require('mongoose')

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

module.exports = UserModel;