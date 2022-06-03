const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    Surname: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
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
    AdmissionDate: {
        type : Date,
        required: false
    }
})

module.exports = Student = mongoose.model('student',StudentSchema);