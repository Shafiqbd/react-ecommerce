import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Index";
import ProductDetails from "./pages/product-details/ProductDetails";
import ProductList from "./pages/product/Index";
import Product from "./pages/product/Product";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/productlist" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/productlist" element={<ProductList />} />
      <Route path="/product/*" element={<Product />}>
        <Route path=":id" element={<Product />} />
      </Route>

      <Route path="/productdetails/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default AppRoute;
