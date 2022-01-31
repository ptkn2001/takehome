const db = require('../config/connection');
const { Physician, Schedule } = require('../models');

const physicianData = require('./physicianData.json');
const scheduleData = require('./scheduleData.json');

db.once('open', async () => {
  await Physician.deleteMany({});
  const physicians = await Physician.insertMany(physicianData);

  await Schedule.deleteMany({});
  const schedules = await Schedule.insertMany(scheduleData);

  console.log('seeded!');
  process.exit(0);
});
