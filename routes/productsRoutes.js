const express = require("express");
const router = express.Router();
const productsController = require("../controller/productsController");

router.get("/", productsController.getAllProducts);

router.get("/:product_id", productsController.getProductById);

router.post("/", productsController.addProduct);

router.put("/:product_id", productsController.updateProduct);

router.delete("/:product_id", productsController.deleteProduct);

module.exports = router;
