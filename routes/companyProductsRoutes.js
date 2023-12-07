const express = require("express");
const router = express.Router();
const companyProductsControler = require("../controller/companyProductsControler");

router.get("/", companyProductsControler.getCompanyProducts);
router.get(
  "/:company_id/:product_id",
  companyProductsControler.getCompanyProductsById
);
router.post("/", companyProductsControler.addCompanyProduct);
router.put(
  "/:company_id/:product_id",
  companyProductsControler.updateCompanyProduct
);
router.delete(
  "/:company_id/:product_id",
  companyProductsControler.deleteCompanyProduct
);

module.exports = router;
