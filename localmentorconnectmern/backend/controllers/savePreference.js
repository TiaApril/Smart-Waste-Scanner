const User = require('../models/userModel')

// create new user
const savePreference = async (req, res) => {
    const { userId, preferredSkills } = req.body;
  
    try {
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      user.preferences = preferredSkills;
      await user.save();
  
      res.json({ message: 'Preferences saved successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error saving user preferences' });
    }
  }

module.exports = {
    savePreference
}