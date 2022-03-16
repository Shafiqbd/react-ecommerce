import { ActionType } from "../../contants/action-type";
const initialState = {
  products: [],
};
export const productReducers = (state = initialState, { payload, type }) => {
  switch (type) {
    case ActionType.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};
export const productByIdReducers = (state = {}, { payload, type }) => {
  switch (type) {
    case ActionType.GET_PRODUCTS_BY_ID:
      return { ...state, ...payload };
    case ActionType.REMOVE_PRODUCTS_BY_ID:
      return {};

    default:
      return state;
  }
};
