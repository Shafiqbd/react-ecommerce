import { GET_PRODUCTS_BY_ID, REMOVE_PRODUCTS_BY_ID, SET_PRODUCTS } from "../../contants/action-type";
export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};
export const getProductByProductId = (products) => {
  return {
    type: GET_PRODUCTS_BY_ID,
    payload: products,
  };
};
export const removeProductByProductId = () => {
  return {
    type: REMOVE_PRODUCTS_BY_ID,
  };
};
