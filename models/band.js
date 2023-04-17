// Import necessary modules from Sequelize
const { Sequelize, DataTypes, Model } = require('sequelize')

// Create a new instance of Sequelize with the database URI passed in as an environment variable
const sequelize = new Sequelize(process.env.PG_URI)

// Define a new model for a "Band" table, extending the base Model class from Sequelize
class Band extends Model {}

// Initialize the Band model with its attributes and options
Band.init({
  // Define an "band_id" column as an integer with primary key and auto-incrementing attributes
  band_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  // Define a "name" column as a string that cannot be null
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // Define a "genre" column as text that cannot be null
  genre: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  // Define an "available_start_time" column as a date that cannot be null
  available_start_time: {
    type: DataTypes.DATE,
    allowNull: false
  },
  // Define an "end_time" column as a date that cannot be null
  end_time: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  // Pass in the instance of Sequelize that was created earlier
  sequelize,
  // Set the name of the model as "Band" - this is used to refer to the model later on in Sequelize queries
  modelName: 'Band',
  // Set the name of the table in the database as "band"
  tableName: 'band',
  // Disable timestamps, which would add "createdAt" and "updatedAt" columns to the table
  timestamps: false
})

// Export the Band model for use in other files
module.exports = Band
