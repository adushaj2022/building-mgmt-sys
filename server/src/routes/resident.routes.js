const express = require("express");
const router = new express.Router();
const { getResidents } = require("../controllers/resident.controller");

router.route("/residents").get(getResidents);

module.exports = router;
