const getAllProducts = "SELECT * FROM products;";
const getProductById = "SELECT * FROM products WHERE product_id = $1;";
const addProduct =
  "INSERT INTO products ( product_name, description, weight, price, rating) VALUES ($1, $2, $3, $4, $5);";
const updateProduct =
  "UPDATE products SET product_name = $1, description = $2, weight = $3, price = $4, rating = $5 WHERE product_id = $6 RETURNING *";
const deleteProduct = "DELETE FROM products WHERE product_id = $1";

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
