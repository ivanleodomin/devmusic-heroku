const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db')

class Comment extends Model {}
Comment.init({
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    puntuacion: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize: sequelize, 
    modelName: 'Comment' 
  })

module.exports = Comment