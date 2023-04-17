// Require Sequelize library and create a new instance of Sequelize with a database URI
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(process.env.PG_URI);

// Define a new model for the Schedule table
class Schedule extends Model {}

// Define the Schedule model's schema with its columns and data types
Schedule.init({
  schedule_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  event_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  band_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  stage_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  scheduled_start_time: {
    type: DataTypes.DATE,
    allowNull: false
  },
  scheduled_end_time: {
    type: DataTypes.DATE,
    allowNull: false
  },
  meet_and_greet_time: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  // Set the instance of Sequelize to be used with this model
  sequelize,
  // Set the name of the model, which will be used in queries and associations
  modelName: 'Schedule',
  // Set the name of the table in the database
  tableName: 'schedule',
  // Disable timestamps to prevent createdAt and updatedAt fields from being added to the table
  timestamps: false
});

// Export the Schedule model to be used in other parts of the application
module.exports = Schedule;
