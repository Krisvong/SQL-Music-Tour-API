// DEPENDENCIES
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(process.env.PG_URI);

// MODEL
class Venue extends Model {}

Venue.init(
  // Define the model attributes
  {
    venue_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    venue_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    venue_location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    venue_capacity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    venue_contact_info: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  // Define additional options
  {
    sequelize,
    modelName: 'Venue',
    tableName: 'venue',
    timestamps: false
  }
);

// EXPORT
module.exports = Venue;
