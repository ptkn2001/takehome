const { Physician, Schedule } = require('../models');

const resolvers = {
  Query: {
    physicians: async () => {
      return Physician.find();
    },
    schedules: async (parent, args) => {
      return Schedule.find(args).populate('physician');
    }
  },
};

module.exports = resolvers;
