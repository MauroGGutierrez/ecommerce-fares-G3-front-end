import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductCards from "../pages/ProductCards";
import CreateProduct from "../pages/CreateProduct";
import NavBar from "../pages/NavBar";

const AppRouter = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/Productos" element={<ProductCards />} />
          <Route path="/createProduct" element={<CreateProduct />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
