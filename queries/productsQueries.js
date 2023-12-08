const getAllProducts = "SELECT * FROM products;";
const getProductById = "SELECT * FROM products WHERE product_id = $1;";
const addProduct =
  "INSERT INTO products ( product_name, description, weight, price, rating) VALUES ($1, $2, $3, $4, $5);";
const updateProduct =
  "UPDATE products SET product_name = $1, description = $2, weight = $3, price = $4, rating = $5 WHERE product_id = $6 RETURNING *";
const deleteProduct = "DELETE FROM products WHERE product_id = $1";
const getProductDetailsForCompany =
  "SELECT p.product_name, cp.available_units FROM products p JOIN company_products cp ON p.product_id = cp.product_id WHERE cp.company_id = $1;";
const getProductsAboveAverageDiscount =
  "SELECT p.product_name FROM products p JOIN company_products cp ON p.product_id = cp.product_id WHERE cp.company_id = $1 AND cp.discount > (SELECT AVG(discount) FROM company_products WHERE company_id = $2);";

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductDetailsForCompany,
  getProductsAboveAverageDiscount,
};
