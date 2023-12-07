const express = require("express");
const router = express.Router();
const companyController = require("../controller/companyController");

router.get("/", companyController.getCompany);
router.get("/:company_id", companyController.getCompanyById);
router.post("/", companyController.addCompany);
router.put("/:company_id", companyController.updateCompany);
router.delete("/:company_id", companyController.deleteCompany);

module.exports = router;
