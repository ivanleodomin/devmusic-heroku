const { DataTypes, Model } = require('sequelize');
const db = require('../config/db')

class Product extends Model {}

Product.init({

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize: db, 
    modelName: 'Product' 
  })

  module.exports = Product