import axios from "axios";

export const getAllProduct = async () => {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");
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
