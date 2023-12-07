const getCompanyProducts = "SELECT * FROM company_products;";
const getCompanyProductsById =
  "SELECT * FROM company_products WHERE company_id = $1 AND product_id = $2;";
const addCompanyProduct =
  "INSERT INTO company_products (company_id, product_id, discount, available_units) VALUES ($1, $2, $3, $4);";
const updateCompanyProduct =
  "UPDATE company_products SET discount = $1, available_units = $2 WHERE company_id = $3 AND product_id = $4 RETURNING *;";
const deleteCompanyProduct =
  "DELETE FROM company_products WHERE company_id = $1 AND product_id = $2;";

  module.exports = {
    getCompanyProducts,
    getCompanyProductsById,
    addCompanyProduct,
    updateCompanyProduct,
    deleteCompanyProduct,
  }
