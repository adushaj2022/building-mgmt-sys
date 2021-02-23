const express = require("express");
const router = new express.Router();
const {
  register,
  login,
  logout,
  me,
} = require("../controllers/user.controller");

router.route("/user/register").post(register);
router.route("/user/login").post(login);
router.route("/user/logout").post(logout);
router.route("/user").get(me);

module.exports = router;
