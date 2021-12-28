const express = require("express");
const router = express.Router();
const isLoggedIn = require("../utils/isLogendIn")
const AuthController = require("../controllers/auth");
const passport = require("passport");
//1

router.get("/me", AuthController.getUser);
router.post("/login", passport.authenticate("local"), AuthController.login);
router.post("/register", AuthController.register);
router.put("/me",isLoggedIn, AuthController.updateMe);
router.delete("/me",isLoggedIn, AuthController.deleteMe);
router.get("/me/buyOrder",isLoggedIn, AuthController.getBuyOrder);
router.get("/me/buyOrder/:idProduct",isLoggedIn, AuthController.getProduct);
router.post("/logout",AuthController.logout);


module.exports = router;