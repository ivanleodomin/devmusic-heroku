const express = require("express");
const router = express.Router();
const isLogendIn = require("../utils/isLogendIn")
const CommentController = require("../controllers/comments");

router.post("/:idProduct", isLogendIn, CommentController.postComments);


module.exports = router