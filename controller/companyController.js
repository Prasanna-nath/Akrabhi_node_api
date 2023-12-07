const pool = require("../db/db");
const queries = require("../queries/companyQueries");

const getCompany = (req, res) => {
  pool.query(queries.getCompany, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getCompanyById = (req, res) => {
  const company_id = req.params.company_id;

  pool.query(queries.getCompanyById, [company_id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addCompany = (req, res) => {
  const { company_name, contact_person_name, phone_number, address } = req.body;

  pool.query(
    queries.addCompany,
    [company_name, contact_person_name, phone_number, address],
    (error, results) => {
      if (error) throw error;
      res.status(200).send("Company added successfully.");
    }
  );
};

const updateCompany = (req, res) => {
  const company_id = req.params.company_id;
  const { company_name, contact_person_name, phone_number, address } = req.body;

  pool.query(queries.getCompanyById, [company_id], (error, results) => {
    const noCompanyFound = !results.rows.length;
    if (noCompanyFound) {
      res.status(200).send("Company dose not exists.");
    }

    pool.query(
      queries.updateCompany,
      [company_name, contact_person_name, phone_number, address, company_id],
      (error, results) => {
        if (error) throw error;
        res.status(200).send("company Updated successfully");
      }
    );
  });
};

const deleteCompany = (req, res) => {
  const company_id = req.params.company_id;

  pool.query(queries.getCompanyById, [company_id], (error, results) => {
    const noCompanyFound = !results.rows.length;
    if (noCompanyFound) {
      res.status(200).send("Company dose not exists.");
    }

    pool.query(queries.deleteCompany, [company_id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Company deleted successfully.");
    });
  });
};

module.exports = {
  getCompany,
  getCompanyById,
  addCompany,
  updateCompany,
  deleteCompany,
};
