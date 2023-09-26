const User = require('../models/userModel')
const Course = require('../models/courseModel')


const suggestedCourse = async (req, res) => {
    const { userId } = req.query;
  
    try {
        const user = await User.findById(userId).populate('preferences').exec();
    
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
    
        const suggestedCourses = await Course.find({ skill: { $in: user.preferences } });
    
        res.json({ suggestedCourses });
      } catch (error) {
        res.status(500).json({ error: 'Error fetching suggested courses' });
    }
  }

module.exports = {
    suggestedCourse
}