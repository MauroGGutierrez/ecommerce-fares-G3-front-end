import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import CreateProduct from "../pages/CreateProduct";
import HomePage from "../pages/HomePage";
import NavBar from "../pages/NavBar";
import ProductCards from "../pages/ProductCards";
import ProductDetails from "../pages/ProductDetails";
import ProductsCatalog from "../pages/ProductsCatalog";
import store from "../Redux/store";

const AppRoutes = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default AppRoutes;
