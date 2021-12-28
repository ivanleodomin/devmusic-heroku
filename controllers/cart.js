const { Cart, User, Product } = require("../models");
const getProductsById = require("../utils/getProductsById");
const nodemailer = require("nodemailer");

class CartController {
  static async getCart(req, res) {
    try {
      const cart = await Cart.findOne({
        where: { userId: req.user.id, done: false },
      });
      let count = {};
      await cart.products.forEach(
        (prod) => (count[prod] = (count[prod] || 0) + 1)
      ); //{1: 2, 3: 5}

      const products = await getProductsById(count);
      const resp = { products: products, total: cart.total };
      res.send(resp);
    } catch {
      const cart = await Cart.create();
      const user = await User.findOne({ where: { id: req.user.id } });

      user.addUsuario(cart);

      res.send(cart);
    }
  }

  static async postProduct(req, res) {
    const { id, price } = req.body;

    let cart = await Cart.findOne({
      where: { userId: req.user.id, done: false },
    });

    const user = await User.findOne({ where: { id: req.user.id } });

    if (!cart) {
      cart = await Cart.create({ products: [id], total: price });
      user.addUsuario(cart);
      res.send(cart);
    } else {
      const upCart = await Cart.update(
        {
          total: cart.total + price,
          products: [...cart.products, id],
        },
        { where: { id: cart.id }, returning: true }
      );
      res.send(upCart[1][0]);
    }
  }
  static async comprar(req, res) {
    try {
      const cart = await Cart.update(
        {done: true},
        {
          where: { userId: req.user.id, done: false },
          raw: true,
          returning: true,
        }
      );

      let count = {};
      await cart[1][0].products.forEach(
        (prod) => (count[prod] = (count[prod] || 0) + 1)
      );

      let ids = Object.keys(count);

      for (let id of ids) {
        const product = await Product.findByPk(id, { raw: true });

        if (count[id] > product.stock)
          throw new Error("invalid purchase value");

        await Product.update(
          { stock: product.stock - count[id] },
          { where: { id: id }, returning: true, raw: true }
        );
      }

      const user = await User.findOne({ where: { id: req.user.id } });
      const newCart = await Cart.create();
      user.addUsuario(newCart);

      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  }

  static async deleteProduct(req, res) {
    const { idProduct, price } = req.body;

    let cart = await Cart.findOne({
      where: { userId: req.user.id, done: false },
    });

    const productsCopy = cart.products;
    const index = cart.products.indexOf(idProduct);

    productsCopy.splice(index, 1);

    const upCart = await Cart.update(
      { products: productsCopy, total: cart.total - price },
      {
        where: { userId: req.user.id, done: false },
        returning: true,
      }
    );

    res.send(upCart[1][0]);
  }
}

module.exports = CartController;
