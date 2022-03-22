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

export const deleteProduct = async (id) => {
  try {
    await axios.delete(`https://fakestoreapi.com/products/${id}`);
    return true;
  } catch (err) {
    return false;
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
export const getCategoryByProduct = async (category) => {
  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
export const addProduct = async (product) => {
  try {
    const { data } = await axios.post("https://fakestoreapi.com/products", JSON.stringify(product));
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
export const updateProduct = async (product, id) => {
  try {
    const { data } = await axios.patch(`https://fakestoreapi.com/products/${id}`, JSON.stringify(product));
    return data;
    console.log(data);
  } catch (err) {
    throw new Error(err);
  }
};
