const User = require('./User')
const Product = require('./Product')
const Category = require('./Category')
const Cart = require('./Cart')
const Comment = require('./Comment')


Product.hasMany(Comment,{as: "product"})
User.hasMany(Comment,{as: "user"})

//-----preguntar a fabri----//
//Product.hasMany(Cart, {as:"producto"})
User.hasMany(Cart, {as:"usuario"})
//---------------------------//

Category.hasMany(Product, {as: "category"})


module.exports = { User, Product, Category, Cart, Comment }

