const getCompany = "SELECT * FROM company;";
const getCompanyById = "SELECT * FROM company WHERE company_id = $1;";
const addCompany =
  "INSERT INTO company (company_name, contact_person_name, phone_number, address) VALUES ( $1, $2, $3, $4 );";
const updateCompany =
  "UPDATE company SET company_name = $1, Contact_person_name = $2, phone_number = $3, address = $4 WHERE company_id = $5 RETURNING *;";
const deleteCompany = "DELETE FROM company WHERE company_id = $1;";
// const getCompaniesWithMostDiscountsQuery =
//   "SELECT c.company_name, SUM(cp.discount) AS total_discount FROM company c JOIN company_products cp ON c.company_id = cp.company_id GROUP BY c.company_name ORDER BY total_discount ASC;";

const getCompaniesWithMostDiscountsQuery =
  "SELECT company.company_name, SUM(company_products.discount) AS total_discount FROM company INNER JOIN company_products ON company.company_id = company_products.company_id GROUP BY company.company_name ORDER BY total_discount ASC;";

module.exports = {
  getCompany,
  getCompanyById,
  addCompany,
  updateCompany,
  deleteCompany,
  getCompaniesWithMostDiscountsQuery,
};
