const mongoose = require('mongoose');

const { Schema } = mongoose;

const physicianSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    }
});

const Physician = mongoose.model('Physician', physicianSchema);
module.exports = Physician;