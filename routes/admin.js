const express = require("express");
const router = express.Router();
const isLogendInAdmin = require("../utils/insLogendInAdmin");
const adminController = require("../controllers/admin");

router.post("/", isLogendInAdmin, adminController.postProduct);
router.post("/category", isLogendInAdmin, adminController.postCategory);
router.put("/category/:id", isLogendInAdmin, adminController.putCategory);
router.get("/category/:id", isLogendInAdmin, adminController.getCategory);
router.delete("/category/:id", isLogendInAdmin, adminController.deleteCategory);
router.put("/product/:id", isLogendInAdmin, adminController.putProduct);
router.delete("/product/:id", isLogendInAdmin, adminController.deleteProduct);
router.get("/users", isLogendInAdmin, adminController.getAllUsers);
router.get("/users/:id", isLogendInAdmin, adminController.getOnlyUser);
router.put("/users/:id", isLogendInAdmin, adminController.upAdmin);
router.delete("/users/:id", isLogendInAdmin, adminController.deleteUser);
router.get("/", isLogendInAdmin, adminController.getAllAdmins);
router.delete("/only/:id", isLogendInAdmin, adminController.deleteAdmin)

module.exports = router;
