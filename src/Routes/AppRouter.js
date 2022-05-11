import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductCards from "../pages/ProductCards";
import CreateProduct from "../pages/CreateProduct";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductCards />} />
        <Route path="/createProduct" element={<CreateProduct />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
