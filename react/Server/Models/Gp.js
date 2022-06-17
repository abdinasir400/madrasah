const mongoose = require('mongoose')

const GpSchema = new mongoose.Schema({
    Student:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Student'
    },
    NameOfGp: {
        type: String,
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
        required: true
    },
    Phone: {
        type : String,
        required: false
    },

})

module.exports = Gp = mongoose.model('gp',GpSchema);