import { GET_PRODUCTS_BY_ID, REMOVE_PRODUCTS_BY_ID, SET_PRODUCTS } from "../../contants/action-type";
const initialState = {
  products: [],
};
export const productReducers = (state = initialState, { payload, type }) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};
export const productByIdReducers = (state = {}, { payload, type }) => {
  switch (type) {
    case GET_PRODUCTS_BY_ID:
      return { ...state, ...payload };
    case REMOVE_PRODUCTS_BY_ID:
      return {};

    default:
      return state;
  }
};
