const mongoose = require('mongoose')

const reportSchema = new mongoose.Schema({

    result: {
        type: String,
        required: true,
    },

    interviewer: {
        type: mongoose.Types.ObjectId,
        ref: 'Admin'
    },

    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }

})