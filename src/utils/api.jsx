import axios from "axios";
import { setCategory } from "../redux/actions/category/categoryActions";
import { getProductByProductId, setProducts } from "../redux/actions/products/productActions";

export const getAllProduct = () => (dispatch) => {
  try {
    axios.get("https://fakestoreapi.com/products?sort=asc").then((response) => {
      dispatch(setProducts(response.data));
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const getProductDetails = (id) => (dispatch) => {
  try {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      dispatch(getProductByProductId(response.data));
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const getProductSorting = (sorting) => (dispatch) => {
  try {
    axios.get(`https://fakestoreapi.com/products?sort=${sorting}`).then((response) => {
      dispatch(setProducts(response.data));
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const deleteProduct = async (id) => {
  try {
    await axios.delete(`https://fakestoreapi.com/products/${id}`);
    console.log("delete:");
  } catch (err) {
    throw new Error(err);
  }
};

export const getAllCategory = () => (dispatch) => {
  try {
    axios.get(`https://fakestoreapi.com/products/categories`).then((response) => {
      dispatch(setCategory(response.data));
    });
  } catch (err) {
    throw new Error(err);
  }
};
export const getCategoryByProduct = (category) => (dispatch) => {
  try {
    axios.get(`https://fakestoreapi.com/products/category/${category}`).then((response) => {
      dispatch(setProducts(response.data));
    });
  } catch (err) {
    throw new Error(err);
  }
};
