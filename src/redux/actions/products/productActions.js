import { ActionType } from "../../contants/action-type";
export const setProducts = (products) => {
  return {
    type: ActionType.SET_PRODUCTS,
    payload: products,
  };
};
export const getProductByProductId = (products) => {
  return {
    type: ActionType.GET_PRODUCTS_BY_ID,
    payload: products,
  };
};
export const removeProductByProductId = () => {
  return {
    type: ActionType.REMOVE_PRODUCTS_BY_ID,
  };
};
