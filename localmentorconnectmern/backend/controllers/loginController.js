const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const config = require('./config');
const User = require('../models/userModel')

// User login route
const login = async (req, res) => {
    const { userName, password } = req.body;
  
    try {
      // Check if the user exists
      const user = await User.findOne({ userName });
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials.' });
      }
  
      // Compare the provided password with the hashed password in the database
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials.' });
      }
  
      // Generate a JWT token
    //   const token = jwt.sign({ userId: user._id }, { expiresIn: '1h' });
      const token = jwt.sign({ userId: user._id }, config.secretKey, { expiresIn: '1h' });

  
      res.status(200).json({ message: 'Login successful.', token });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'Server error.' });
    }
  };
  
  module.exports = {
    login
}