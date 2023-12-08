const express = require("express");
const router = express.Router();
const productsController = require("../controller/productsController");

router.get("/", productsController.getAllProducts);

router.get("/:product_id", productsController.getProductById);

router.post("/", productsController.addProduct);

router.put("/:product_id", productsController.updateProduct);

router.delete("/:product_id", productsController.deleteProduct);

router.get(
  "/company/:company_id",
  productsController.getProductDetailsForCompany
);

router.get(
  "/above-average-discount/:company_id",
  productsController.getProductsAboveAverageDiscount
);

module.exports = router;
