const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userData = new Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    preferences: [String],
}, { versionKey: false })

module.exports = mongoose.model("userProfile", userData)