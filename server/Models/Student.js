const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: [true, "Please add First Name"],
  },
  Surname: {
    type: String,
    required: [true, "Please add Surname"],
  },
  DOB: {
    type: Date,
    required: [true, "Please add DOB"],
  },
  Gender: {
    type: String,
    required: [true, "Please add DOB"],
  },
  Address: {
    street: {
      type: String,
      required: [true, "Please add Address"],
    },
    Postcode: {
      type: String,
      required: [true, "Please add Postcode"],
    },
    City: {
      type: String,
      required: [true, "Please add City"],
    },
  },
  AdmissionDate: {
    type: Date,
    required: [false, "Please add Admission Date"],
  },
});

module.exports = mongoose.model("Student", StudentSchema);
