const express = require("express");
const router = express.Router();
const isLogendIn = require("../utils/isLogendIn")
const CartController = require("../controllers/cart");

router.get("/", isLogendIn, CartController.getCart);
router.post("/", isLogendIn, CartController.postProduct);
router.put("/buy", isLogendIn, CartController.comprar);
router.delete("/", isLogendIn, CartController.deleteProduct); 

module.exports = router