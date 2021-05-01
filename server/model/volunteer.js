const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    fname : {
        type : String,
        required: true
    },
    lname : {
        type: String,
        required: true
    },
    phone : {
        type: Number,
        required: true
    },
    location : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    }  
})

const volunteerDb = mongoose.model('volunteer', schema);

module.exports = volunteerDb;