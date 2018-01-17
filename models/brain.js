'use strict';
module.exports = (sequelize, DataTypes) => {
  var Brain = sequelize.define('Brain', {
    vertexNumber: DataTypes.INTEGER,
    x: DataTypes.INTEGER,
    y: DataTypes.INTEGER,
    z: DataTypes.INTEGER,
    color: DataTypes.INTEGER,
    catagory: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  }, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'braintbl'
  });
  return Brain;
};