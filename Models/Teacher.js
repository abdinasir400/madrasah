const mongoose = require('mongoose')

const TeacherSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    Surname: {
        type: String,
        required: true
    },
    Gender: {
        type : String,
        required: true
    },
    Address: {
        type : String,
        required: true
    },
    Postcode: {
        type : String,
        required: true
    },
    City: {
        type : String,
        required: true
    },
    Phone: {
        type : String,
        required: true
    },
    Email: {
        type : String,
        unique: true,
        required: true
    },
    DOB: {
        type : Date,
        required: true
    },
})

module.exports = mongoose.model('Teacher',TeacherSchema);