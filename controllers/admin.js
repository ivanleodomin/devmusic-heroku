const { Product, Category, User } = require("../models");
const sequelize = require("sequelize");

class AdminController {
  // '/admin'
  static async postProduct(req, res) {
    try {
      const newProduct = await Product.create(req.body);
      const categoria = await Category.findOne({
        where: { name: req.body.category },
      });
      await categoria.addCategory(newProduct);
      res.send(await Product.findOne({ where: { id: newProduct.id } }));
    } catch (err) {
      res.statusCode = 500;
      return res.send(err);
    }
  }

  static async getCategory(req, res) {
    try {
      res.send(await Category.findOne({ where: { id: req.params.id } }));
    } catch (err) {
      res.status(500).send(err);
    }
  }

  static async putProduct(req, res) {
    try {
      if (!req.body.category) {
        const productUpd = await Product.update(req.body, {
          where: { id: req.params.id },
          returning: true,
        });
        res.send(productUpd);
      } else {
        await Product.update(req.body, {
          where: { id: req.params.id },
        });
        const category = await Category.findOne({
          where: { name: req.body.category },
        });
        const product = await Product.findOne({ where: { id: req.params.id } });
        category.setCategory(product);

        res.send(await Product.findOne({ where: { id: req.params.id } }));
      }
    } catch {
      res.sendStatus(500);
    }
  }

  static async deleteProduct(req, res) {
    try{
      Product.destroy({ where: { id: req.params.id } });
      res.sendStatus(200);
    }
    catch(err){
      res.status(500).send(err);
    }
  }

  static async getAllUsers(req, res) {
    try{
      
      const users = await User.findAll({
        where: {
          isSuperAdmin: {
            [sequelize.Op.ne]: true,
          },
        },
      });
      res.send(users);
    }catch(err){
      res.status(500).send(err);
    }
  }
  static async getOnlyUser(req, res) {
    try{

      const user = await User.findOne({
        where: {
          id: req.params.id,
          isSuperAdmin: {
            [sequelize.Op.ne]: true,
          },
        },
      });
      res.send(user);
    }catch(err){
      res.status(500).send(err);
    }
  }
  static async upAdmin(req, res) {
    if (req.user.isSuperAdmin) {
      const user = await User.update(
        { isAdmin: req.body.isAdmin },
        {
          where: {
            id: req.params.id,
          },
          returning: true,
        }
      );
      res.send(user);
    } else {
      res.sendStatus(500);
    }
  }

  static async deleteUser(req, res) {
    if (req.user.isAdmin) {
      await User.destroy({
        where: {
          id: req.params.id,
          isSuperAdmin: {
            [sequelize.Op.ne]: true,
          },
        },
      });
      res.send("DELETED");
    } else {
      res.sendStatus(500);
    }
  }

  static async postCategory(req, res) {
    const newCat = await Category.create(req.body);
    res.send(newCat);
  }
  static async putCategory(req, res) {
    const upCat = await Category.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });
    res.send(upCat);
  }
  static async deleteCategory(req, res) {
    await Category.destroy({ where: { id: req.params.id } });
    res.send(200);
  }

  static async getAllAdmins(req, res) {
    if (req.user.isSuperAdmin) {
      const admins = await User.findAll({
        where: {
          isAdmin: true,
          isSuperAdmin: {
            [sequelize.Op.ne]: true,
          },
        },
      });

      res.send(admins);
    } else {
      res.sendStatus(401);
    }
  }

  static async deleteAdmin(req, res) {
    try {
      if (req.user.isSuperAdmin) {
        User.destroy({ where: { id: req.params.id } });
        res.send(204);
      } else {
        res.sendStatus(401);
      }
    } catch {
      res.sendStatus(500);
    }
  }
}

module.exports = AdminController;
