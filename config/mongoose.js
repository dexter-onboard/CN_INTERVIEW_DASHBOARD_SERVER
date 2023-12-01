const mongoose = require('mongoose')


// const mongoDB = mongoose.connect('mongodb://127.0.0.1:27017/interview-dashboard')
const mongoDB = mongoose.connect(process.env.MONGODB_ATLAS_URL)

const db = mongoose.connection

db.once('open', () => { console.log("DB connected successfully") })

module.exports = mongoDB