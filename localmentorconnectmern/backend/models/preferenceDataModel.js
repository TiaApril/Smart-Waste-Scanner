const mongoose = require('mongoose')

const Schema = mongoose.Schema

const preferenceData = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'userProfile', required: true },
  preferredCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'course' }],
  skills: [String]
}, { versionKey: false })

module.exports = mongoose.model("preferenceData", preferenceData)