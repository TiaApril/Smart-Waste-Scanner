const User = require('../models/userModel')
const mongoose = require('mongoose')

// register
// create new user
const createUser = async(req, res) => {
    const {userName, email, password} = req.body


    // add to db
    try {
        const user = await User.create({userName, email, password})
        res.status(200).json(user)
    } catch(error) {
        res.status(400).json({error:error.message})
    }
}


const getUser = async (req, res) => {
    const users = await User.find({})

    res.status(200).json(users)
}


module.exports = {
    createUser, getUser
}