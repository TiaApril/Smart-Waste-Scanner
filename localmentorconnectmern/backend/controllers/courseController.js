const Course = require('../models/courseModel')
const mongoose = require('mongoose')



const getCourse = async (req, res) => {
    const courses = await Course.find({})

    res.status(200).json(courses)
}

const createCourse = async (req, res) => {
    try {
        // Get the course data from the request body
        const courseData = req.body;
    
        // Create a new course instance using the Mongoose model
        const newCourse = new Course(courseData);
    
        // Save the new course to the database
        await newCourse.save();
    
        // Send a success response
        res.status(201).json({ message: 'Course data saved successfully!' });
      } catch (err) {
        // If an error occurs, send an error response
        console.error('Error saving course data:', err);
        res.status(500).json({ error: 'Failed to save course data.' });
      }
}

// // create course
// const createCourse = async(req, res) => {
//     const {
//         courseName, 
//         category, 
//         skill, 
//         description, 
//         difficulty,
//         availability,
//         location
//     } = req.body


//     // add to db
//     try {
//         const course = await Course.create({
//             courseName, 
//             category, 
//             skill, 
//             description, 
//             difficulty,
//             availability,
//             location
//         })
//         res.status(200).json(course)
//     } catch(error) {
//         res.status(400).json({error:error.message})
//     }
// }


module.exports = {
    getCourse, createCourse
}