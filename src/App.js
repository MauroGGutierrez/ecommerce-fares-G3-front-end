import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateProduct from "./pages/CreateProduct";
import ProductCards from "./pages/ProductCards";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductCards />} />
        <Route path="/createProduct" element={<CreateProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
