import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Index";
import Product from "./pages/home/Product";
import ProductDetails from "./pages/product-details/ProductDetails";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/productlist" element={<Product />} />
      <Route path="/productdetails/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default AppRoute;
