const { Product } = require("../models");

async function getProductsById(count) {
  let products = [];
  let ids = Object.keys(count)
  for (let id of ids){
    let product = await Product.findOne({ where: { id: id } })
    product.dataValues.cantidad = count[id]
    products.push(product)
  }

  return products;
}

module.exports = getProductsById;
