const express = require("express");
const { registerUser, loginUser, logout, getUserDetails } = require("../controllers/userController");

const router = express.Router();

//User route
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);

module.exports = router;