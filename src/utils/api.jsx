import axios from "axios";

export const getAllProduct = async () => {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products?sort=asc");
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getProductDetails = async (id) => {
  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getProductSorting = async (sorting) => {
  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products?sort=${sorting}`);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
export const getAllCategory = async () => {
  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products/categories`);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
export const getCategoryByroduct = async (category) => {
  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
