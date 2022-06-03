const mongoose = require('mongoose')

const EmergencySchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    Surname: {
        type: String,
        required: true
    },
    Relationship: {
        type: string,
        required: false
    },
    Gender: {
        type : String,
        enum: genders,
        required: true
    },
    Address: {
        type : String,
        required: false
    },
    Postcode: {
        type : String,
        required: false
    },
    City: {
        type : String,
        required: false
    },
    Phone: {
        type : String,
        required: false
    },
    Email: {
        type : String,
        unique: true,
        required: false
    },

})

module.exports = Emergency = mongoose.model('emergency',EmergencySchema);