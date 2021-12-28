require("dotenv").config();
const { Sequelize } = require("sequelize");
const {
  database,
  username,
  password,
  dialect,
  logging,
} = require("./configDB.json");

const db = new Sequelize(database, username, password, {
  host: "ec2-52-72-252-211.compute-1.amazonaws.com",
  port:"5432",
  dialect,
  logging,
  dialectOptions: {
    ssl: {
        require: true,
        rejectUnauthorized: false // <<<<<< YOU NEED THIS
    }
}
});

module.exports = db;
