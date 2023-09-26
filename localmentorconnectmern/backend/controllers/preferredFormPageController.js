const PreferenceForm = require('../models/preferenceDataModel')
const Course = require('../models/courseModel')
const mongoose = require('mongoose')

// create new user
const createPreferrenceData = async (req, res) => {
    const { userId, preferredCourses, skills } = req.body;
  
    try {
        const courseIds = await Course.find({ courseName: { $in: preferredCourses } }).distinct('_id');

        const userPreferences = await PreferenceForm.findOneAndUpdate(
          { userId },
          { preferredCourses: courseIds, skills },
          { upsert: true, new: true }
      );
      res.json(userPreferences);
    } catch (error) {
      res.status(500).json({ error: 'Error saving user preferences' });
    }
  }


// async(req, res) => {
//     const {preferredSkills} = req.body


//     // add to db
//     try {
//         const preferrence = await PreferenceForm.create({preferredSkills})
//         res.status(200).json(preferrence)
//     } catch(error) {
//         res.status(400).json({error:error.message})
//     }
// }


module.exports = {
    createPreferrenceData
}