import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductCards from "../pages/ProductCards";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<ProductCards />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
