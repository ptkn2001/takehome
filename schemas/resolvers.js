const { LoneSchemaDefinitionRule } = require('graphql');
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
  Mutation: {
    addSchedule: async (parent, args) => {
      const schedule = await Schedule.create(args);
      return schedule;
    },
    updateSchedule: async (parent, { scheduleId, name, time, kind, physician }) => {
      const schedule = await Schedule.findOneAndUpdate({ _id: scheduleId },
        {
          name: name, 
          time: time, 
          kind: kind, 
          physician: physician
        },
        { new: true }
      );
      return schedule;
    },
    removeSchedule: async (parent, { scheduleId }) => {
      const schedule = await Schedule.findOneAndDelete({ _id: scheduleId })
      return schedule;
    },
  }
};

module.exports = resolvers;
