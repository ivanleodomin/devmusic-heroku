const { Product, Category, Comment } = require("../models");
const { Op } = require("sequelize");

class ProductsController {
  static async getAll(req, res) {
    const products = await Product.findAll();

    res.send(products);
  }

  static async getById(req, res) {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    const comments = await Comment.findAll({
      where: {
        ProductId: req.params.id,
      },
    });
    let puntuation = [];
    let valoration;
    if (comments.length > 1) {
      comments.forEach((com) => puntuation.push(com.dataValues.puntuacion));
      valoration = (
        puntuation.reduce((a, b) => (b += a)) / puntuation.length
      ).toFixed(1);
    } else {
      valoration = comments[0]?.puntuacion;
    }
    const category = await Category.findOne({
      where: { id: product.CategoryId },
    });

    res.send({
      product: product,
      comments: comments,
      valoration: valoration,
      categoryName: category,
    });
  }

  static async getByCategory(req, res) {
    try {
      const { category } = req.params;
      const { page = 1 } = req.query;
      const categoria = await Category.findOne({
        where: { name: category },
      });
      const products = await Product.findAndCountAll({
        raw: true,
        where: { CategoryId: categoria.id },
        limit: 4,
        offset: (parseInt(page) - 1) * 4,
      });
      res.send(products.rows);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  static async getByName(req, res) {
    try {
      const { name } = req.params;
      const { page = 1 } = req.query;
      const products = await Product.findAll({
        where: {
          name: {
            [Op.iLike]: `${name}%`,
          },
        },
      });

      res.send(products.slice(9 * (page - 1), 9 * page));
    } catch (err) {
      res.status(500).send(err);
    }
  }

  static async getAllCategory(req, res) {
    try {
      const category = await Category.findAll();
      res.send(category);
    } catch {
      res.sendStatus(500);
    }
  }
}

module.exports = ProductsController;
