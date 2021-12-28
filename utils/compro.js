
const {Cart} = require('../models')

async function compro(req, res, next) {
  const { idProduct } = req.params;

  const buyOrder = await Cart.findAll({
    where: {
      userId: req.user.id,
      done: true,
    },
  });

  buyOrder.forEach((order) => {
    if (order.products.includes(idProduct)) {
        console.log("entro")
    }
    else res.sendStatus(401);
  });
}

module.exports = compro
