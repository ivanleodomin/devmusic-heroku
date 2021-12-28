const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/db");
const bcrypt = require("bcrypt");

class User extends Model {}

User.init(
  {
    facebookId: {
      type: DataTypes.STRING,
    },
   
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[a-z]+$/i,
      },
    },
    email: {
      type: DataTypes.STRING,
      isEmail: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salt: {
      type: DataTypes.STRING,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isSuperAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    tel: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: sequelize,
    modelName: "user",
  }
);

User.prototype.hash = (password, salt) => {
  return bcrypt.hash(password, salt);
};

User.beforeCreate((user) => {
  return bcrypt
    .genSalt(10)
    .then((salt) => {
      user.salt = salt;
      return user.hash(user.password, salt);
    })
    .then((hash) => (user.password = hash));
});

module.exports = User;
