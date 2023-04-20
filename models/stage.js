'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    static associate( { Event, StageEvent }) {
      // events
      Stage.belongsToMany(Event, { 
        foreignKey: "stage_id",
        as: "events",
        through: StageEvent
      })
    }
  }
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
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sound_system: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Stage',
    timestamps: false
  });
  return Stage;
};