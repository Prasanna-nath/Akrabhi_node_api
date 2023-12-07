const pool = require("../db/db");
const queries = require("../queries/companyProductsQueries");

const getCompanyProducts = (req, res) => {
  pool.query(queries.getCompanyProducts, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getCompanyProductsById = (req, res) => {
  const company_id = req.params.company_id;
  const product_id = req.params.product_id;

  pool.query(
    queries.getCompanyProductsById,
    [company_id, product_id],
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

const addCompanyProduct = (req, res) => {
  const { company_id, product_id, discount, available_units } = req.body;

  pool.query(
    queries.addCompanyProduct,
    [company_id, product_id, discount, available_units],
    (error, results) => {
      if (error) throw error;
      res.status(200).send("Company Products added.");
    }
  );
};

const updateCompanyProduct = (req, res) => {
  company_id = req.params.company_id;
  product_id = req.params.product_id;
  const { discount, available_units } = req.body;

  pool.query(
    queries.getCompanyProductsById,
    [company_id, product_id],
    (error, results) => {
      const noCompanyProductFound = !results.rows.length;
      if (noCompanyProductFound) {
        res.status(200).send("Company product dose not exists.");
      }
      pool.query(
        queries.updateCompanyProduct,
        [discount, available_units, company_id, product_id],
        (error, results) => {
          if (error) throw error;
          res.status(200).send("Company product updated successfully.");
        }
      );
    }
  );
};

const deleteCompanyProduct = (req, res) => {
  company_id = req.params.company_id;
  product_id = req.params.product_id;

  pool.query(
    queries.getCompanyProductsById,
    [company_id, product_id],
    (error, results) => {
      const noCompanyProductFound = !results.rows.length;
      if (noCompanyProductFound) {
        res.status(200).send("Company product dose not exists.");
      }
      pool.query(
        queries.deleteCompanyProduct,
        [company_id, product_id],
        (error, results) => {
          if (error) throw error;
          res.status(200).send("Company product updated successfully.");
        }
      );
    }
  );
};

module.exports = {
  getCompanyProducts,
  getCompanyProductsById,
  addCompanyProduct,
  updateCompanyProduct,
  deleteCompanyProduct,
};
