const { User, Cart, Comment, Product } = require("../models");

class CommentController {
  static async postComments(req, res) {
    const { idProduct } = req.params;
    const products = await Product.findOne({ where: { id: idProduct } });
    const user = await User.findOne({ where: { id: req.user.id } });

    const buyOrder = await Cart.findAll({
      where: {
        userId: req.user.id,
        done: true,
      },
    });

    let buyComplete = false;
    buyOrder.forEach((order) => {
      if (order.products.includes(parseInt(idProduct))) {
        return (buyComplete = true);
      }
    });

    if (buyComplete) {
      const exist = await Comment.findOne({
        where: { userId: req.user.id, ProductId: idProduct },
      });

      if (!exist) {
        const comment = await Comment.create(req.body);
        user.addUser(comment);
        products.addProduct(comment);

        return res.send(await Comment.findOne({ where: { id: comment.id } }));
      } else {
        const comment = await Comment.update(req.body, {
          where: { id: exist.id },
          returning: true,
        });

        return res.send(comment);
      }
    } else res.sendStatus(401);
  }

}

module.exports = CommentController;
