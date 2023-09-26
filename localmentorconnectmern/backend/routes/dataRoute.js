const express = require('express')
const { createUser, getUser } = require('../controllers/userController')
const { createPreferrenceData } = require('../controllers/preferredFormPageController')
const { getCourse, createCourse } = require('../controllers/courseController')
const { login } = require('../controllers/loginController')
const { suggestedCourse } = require('../controllers/suggestedCourseController')
const { savePreference } = require('../controllers/savePreference')

const router = express.Router()

// Create new user
router.post('/register', createUser)

router.get('/user', getUser)

// get course data

router.get('/course', getCourse)

// upload course

router.post('/course', createCourse)

// Create Preference Data
router.post('/preferenceform', createPreferrenceData)

// login
router.post('/login', login)

// get course
router.get('/suggestedcourse', suggestedCourse )

// save preference
router.post('/save-preference', savePreference)

module.exports = router

