const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(process.env. PG_URI);

class Schedule extends Model {}

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
    sequelize,
    modelName: 'Schedule',
    tableName: 'schedule',
    timestamps: false
});

module.exports = Schedule;