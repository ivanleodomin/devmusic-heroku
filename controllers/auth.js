/* eslint-disable eqeqeq */
/* eslint-disable no-loop-func */
const { User, Cart } = require("../models");
const getProductsById = require("../utils/getProductsById");

class AuthController {
  //"/me"
  static async getUser(req, res) {
    res.send(req.user);
    // !req.user ? res.sendStatus(401) : res.send(req.user);
  }

  //"/login"
  static async login(req, res) {
    res.send(req.user);
  }

  //"/register"
  static async register(req, res) {
    try {
      const user = await User.create(req.body);
      res.send(user);
    } catch {
      res.sendStatus(500);
    }
  }

  //"/me"
  static async updateMe(req, res) {
    const user = await User.update(req.body, {
      where: {
        id: req.user.id,
      },
      returning: true,
    });
    res.status(200).send(user);
  }

  //"/:id"
  static async deleteMe(req, res) {
    await User.destroy({
      where: {
        id: req.user.id,
      },
    });
    req.logout();
    res.sendStatus(204);
  }

  //"/logout"
  static async logout(req, res) {
    req.logout();
    res.sendStatus(204);
  }
  static async getBuyOrder(req, res) {
    try {
      const byOrder = await Cart.findAll({
        where: {
          userId: req.user.id,
          done: true,
        },
      });

      let orders = [];
      for (let i = 0; i < byOrder.length; i++) {
        let count = {};
        byOrder[i].products.forEach(
          (prod) => (count[prod] = (count[prod] || 0) + 1)
        );
        const products = await getProductsById(count);
        const resp = {
          buyOrderId: byOrder[i].id,
          order: { products: products, total: byOrder[i].total },
        };
        orders.push(resp);
      }
      res.send(orders);
    } catch {
      res.sendStatus(401);
    }
  }

  static async loginFacebook(req, res) {
    res.send("bien");
  }

  static async getProduct(req, res) {
    try {
      const { idProduct } = req.params;

      const buyOrders = await Cart.findAll({
        where: {
          userId: req.user.id,
          done: true,
        },
      });

      let buy = false;
      for (let i = 0; i < buyOrders.length; i++) {
        buyOrders[i].products.forEach((id) => {
          if (id == idProduct) {
            return (buy = true);
          }
        });
      }
      res.send(buy);
    } catch {
      res.sendStatus(401);
    }
  }
}

module.exports = AuthController;
