const pool = require("../db/db");
const queries = require("../queries/productsQueries");
//const uuid = require("../db/uuid");

const getAllProducts = (req, res) => {
  pool.query(queries.getAllProducts, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getProductById = (req, res) => {
  const product_id = req.params.product_id;
  pool.query(queries.getProductById, [product_id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addProduct = (req, res) => {
  const { product_name, description, weight, price, rating } = req.body;

  pool.query(
    queries.addProduct,
    [product_name, description, weight, price, rating],
    (error, results) => {
      if (error) throw error;
      res.status(200).send("Product added successfully.");
    }
  );
};

const updateProduct = (req, res) => {
  const product_id = req.params.product_id;
  const { product_name, description, weight, price, rating } = req.body;

  pool.query(queries.getProductById, [product_id], (error, results) => {
    const noProductFound = !results.rows.length;
    if (noProductFound) {
      res.status(200).send("Product dose not exists.");
    }

    pool.query(
      queries.updateProduct,
      [product_name, description, weight, price, rating, product_id],
      (error, results) => {
        if (error) throw error;
        res.status(200).send("Product updated successfully.");
        console.log("Product updated.");
      }
    );
  });
};

const deleteProduct = (req, res) => {
  const product_id = req.params.product_id;

  pool.query(queries.deleteProduct, [product_id], (error, results) => {
    if (error) throw error;
    res.status(200).send("Product deleted successfully.");
    console.log("Product deleted.");
  });
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
