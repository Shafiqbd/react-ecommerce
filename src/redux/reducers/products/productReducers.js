import { INSERT_PRODUCTS } from "../../contants/action-type";
const initialState = {
  productData: {
    title: "",
    price: 0,
    description: "",
    image: "",
    category: "",
  },
};
export const productReducers = (state = initialState, { payload, type }) => {
  switch (type) {
    case INSERT_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};
