const getCompany = "SELECT * FROM company;";
const getCompanyById = "SELECT * FROM company WHERE company_id = $1;";
const addCompany =
  "INSERT INTO company (company_name, contact_person_name, phone_number, address) VALUES ( $1, $2, $3, $4 );";
const updateCompany =
  "UPDATE company SET company_name = $1, Contact_person_name = $2, phone_number = $3, address = $4 WHERE company_id = $5 RETURNING *;";
const deleteCompany = "DELETE FROM company WHERE company_id = $1;";

module.exports = {
  getCompany,
  getCompanyById,
  addCompany,
  updateCompany,
  deleteCompany,
};
