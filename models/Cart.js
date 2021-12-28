const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/db");

class Cart extends Model {}
Cart.init(
  {
    total: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    products: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue: [],
    },
  },
  {
    sequelize: sequelize,
    modelName: "Cart",
  }
);

module.exports = Cart;
