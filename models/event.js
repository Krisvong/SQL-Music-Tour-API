// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)

// MODEL
class Event extends Model{}

Event.init({
    event_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    event_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    event_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    event_start_time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    event_end_time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    venue_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Event',
    tableName: 'event',
    timestamps: false
});

module.exports = Event;

