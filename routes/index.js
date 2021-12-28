const express = require("express");
const router = express.Router();
const products = require("./products");
const auth = require("./auth");
const admin = require("./admin");
const cart = require("./cart")
const comments = require("./comments")

router.use("/products", products);
router.use("/comments", comments);
router.use("/auth", auth);
router.use("/admin", admin);
router.use("/cart", cart)

module.exports = router;
