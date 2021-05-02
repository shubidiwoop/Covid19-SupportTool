const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    vfname : {
        type : String,
        required: true
    },
    vlname : {
        type: String,
        required: true
    },
    vphone : {
        type: Number,
        required: true
    },
    vlocation : {
        type: String,
        required: true
    },
    vmail : {
        type: String,
        required: true
    },
    vhometown : {
        type: String,
        required: true
    }  
})

const volunteerDb = mongoose.model('volunteer', schema);

module.exports = volunteerDb;