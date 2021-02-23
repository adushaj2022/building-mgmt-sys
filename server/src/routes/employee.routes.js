const express = require("express");
const router = new express.Router();

const {
  getEmployees,
  createEmployee,
  deleteEmployee,
  updateEmployee,
} = require("../controllers/employee.controller");

router.route("/employees").get(getEmployees);
router.route("/createEmployee").post(createEmployee);
router.route("/updateEmployee").put(updateEmployee);
router.route("/delete/:id").delete(deleteEmployee);

module.exports = router;
