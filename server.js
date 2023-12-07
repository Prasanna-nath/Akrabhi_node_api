const express = require("express");
const productsRoutes = require("./routes/productsRoutes");
const companyRoutes = require("./routes/companyRoutes");
const companyProductsRoutes = require("./routes/companyProductsRoutes");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/products", productsRoutes);
app.use("/company", companyRoutes);
app.use("/company-products", companyProductsRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
