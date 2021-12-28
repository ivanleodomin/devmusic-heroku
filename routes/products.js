const express = require("express");
const router = express.Router();
const ProductsController = require("../controllers/products");

router.get("/", ProductsController.getAll);
router.get("/id/:id", ProductsController.getById);
router.get("/category/:category", ProductsController.getByCategory);
router.get("/category", ProductsController.getAllCategory);
router.get("/name/:name", ProductsController.getByName);


module.exports = router;

