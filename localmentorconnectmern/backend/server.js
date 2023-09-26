require('dotenv').config()
const express = require('express');
var cors = require('cors')
const dataRoute = require('./routes/dataRoute');
const {default: mongoose} = require('mongoose');

// express app
const app = express();

// middleware
app.use(cors())
app.use(express.json())
app.use((req, res, next)=> {
    console.log(req.path, req.method)
    next()
})


// routes
app.use('/api', dataRoute )

// connect to db
mongoose.connect(process.env.MONGO_URI,
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> {
    // listen to request
    app.listen(process.env.PORT, ()=> {
        console.log('connected to db & server started on port', process.env.PORT)
    })
})
.catch((error)=> {
    console.log(error)
})