import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateProduct from "./pages/CreateProduct";
import ProductCards from "./pages/ProductCards";
import ProductDetails from "./pages/ProductDetails";
import ProductsCatalog from "./pages/ProductsCatalog";
import NavBar from "./pages/NavBar";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Products" element={<ProductCards />} />
        <Route path="/createProduct" element={<CreateProduct />} />
        <Route path="/productsCatalog" element={<ProductsCatalog />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        {/* usar useParams en el componente */}
      </Routes>
    </Router>
  );
};

export default App;
