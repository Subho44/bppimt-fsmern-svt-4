const express = require("express");
const router = express.Router();
const empctl = require("../controllers/employeecontroller");

router.post("/",empctl.addemp);
router.get("/",empctl.getemp);
router.get("/:id",empctl.singelemp);
router.put("/:id",empctl.updateemp);
router.delete("/:id",empctl.deleteemp);

module.exports = router;