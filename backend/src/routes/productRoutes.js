const express = require("express");
const router = express.Router();

const {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts,
} = require("../controllers/productController");

router.get("/", getProducts);

router.get("/search", searchProducts);

router.post("/", createProduct);

router.get("/:id", getProductById);

router.put("/:id", updateProduct);

module.exports = router;

router.delete("/:id", deleteProduct);