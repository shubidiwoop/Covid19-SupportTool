const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    pname : {
        type : String,
        required: true
    },
    location : {
        type: String,
        required: true
    },
    age : {
        type: Number,
        required: true
    },
    requirement : {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    cname : {
        type: String,
        required: true
    },
    cpho: {
        type: Number,
        required: true
    },
    blood : String,
    status : Boolean  
})

const requestDb = mongoose.model('request', schema);

module.exports = requestDb;