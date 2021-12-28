const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db')

class Category extends Model {}

Category.init({

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    sequelize: sequelize, 
    modelName: 'Category' 
  })

  module.exports = Category