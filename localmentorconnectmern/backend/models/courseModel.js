const mongoose = require('mongoose')

// const Schema = mongoose.Schema

// const course = new Schema(
//     {
//     courseName: {
//         type: String,
//         required: true
//     },
//     category: {
//         type: String,
//         required: true
//     },
//     skill: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     difficulty: {
//         type: String,
//         required: true
//     }
// }, { versionKey: false }

// )




// module.exports = mongoose.model("course", course)

const course = new mongoose.Schema({
    courseName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    skill: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    availability: {
      type: {
        Monday: [{ type: String }],
        Tuesday: [{ type: String }],
        Wednesday: [{ type: String }],
        Thursday: [{ type: String }],
        Friday: [{ type: String }],
        Saturday: [{ type: String }],
        Sunday: [{ type: String }],
      },
      required: true,
    },
    location: {
      type: {
        latitude: {
          type: Number,
          required: true,
        },
        longitude: {
          type: Number,
          required: true,
        },
        country: {
          type: String,
          required: true,
        },
        state: {
          type: String,
          required: true,
        },
        city: {
          type: String,
          required: true,
        },
      },
      required: true,
    }
  }, {timestamps: true,
    versionKey: false });
  
 module.exports = mongoose.model("course", course)