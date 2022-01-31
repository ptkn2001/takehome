const mongoose = require('mongoose');

const { Schema } = mongoose;

const scheduleSchema = new Schema({
    name: {
      type: String
    },
    time: {
      type: String,
      required: true
    },
    kind: {
      type: String,
      required: true
    },
    physician: {  
      type: Schema.Types.ObjectId,
      ref: 'Physician'
    }    
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;
