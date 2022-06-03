const mongoose = require('mongoose')

const ParentSchema = new mongoose.Schema({
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
        enum: ['Father','Mother'],
        required: true
    },
    Gender: {
        type : String,
        enum: genders,
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

})

module.exports = Parent = mongoose.model('parent',ParentSchema);