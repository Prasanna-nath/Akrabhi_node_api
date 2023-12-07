-- Products Table
CREATE TABLE IF NOT EXISTS products (
    product_id SERIAL PRIMARY KEY,
    product_uuid UUID DEFAULT uuid_generate_v4(),
    product_name VARCHAR(255),
    description TEXT,
    weight FLOAT,
    price NUMERIC,
    rating FLOAT
  );

-- Company Table
CREATE TABLE IF NOT EXISTS company (
    company_id SERIAL PRIMARY KEY,
    company_name VARCHAR(255),
    contact_person_name VARCHAR(255),
    phone_number VARCHAR(15),
    address TEXT
  );

-- Company Products Table
CREATE TABLE IF NOT EXISTS company_products (
    company_id INT REFERENCES company(company_id),
    product_id INT REFERENCES products(product_id),
    discount NUMERIC,
    available_units INT,
    PRIMARY KEY (company_id, product_id)
  );
  