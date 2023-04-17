// Require Sequelize library and create a new instance of Sequelize with a database URI
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(process.env.PG_URI);

// Define a new model for the Stage table
class Stage extends Model {}

// Define the Stage model's schema with its columns and data types
Stage.init({
  stage_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  stage_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  stage_size: {
    type: DataTypes.STRING,
    allowNull: false
  },
  stage_location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  venue_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  // Set the instance of Sequelize to be used with this model
  sequelize,
  // Set the name of the model, which will be used in queries and associations
  modelName: 'Stage',
  // Set the name of the table in the database
  tableName: 'stage',
  // Disable timestamps to prevent createdAt and updatedAt fields from being added to the table
  timestamps: false
});

// Export the Stage model to be used in other parts of the application
module.exports = Stage;
