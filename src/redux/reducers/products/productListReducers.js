import {
  CHANGE_PRODUCT_INPUT,
  GET_PRODUCTS_BY_ID,
  INSERT_PRODUCTS,
  REMOVE_PRODUCTS_BY_ID,
  SET_PRODUCTS,
  UPDATE_PRODUCTS,
} from "../../contants/action-type";
const initialState = {
  products: [],
  productData: {
    id: 0,
    title: "",
    price: 0,
    description: "",
    image: "",
    category: "",
  },
};
export const productListReducers = (state = initialState, { payload, type }) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };
      break;

    case INSERT_PRODUCTS:
      return {
        ...state,
        productData: {
          title: "",
          price: 0,
          description: "",
          image: "",
          category: "",
        },
      };
      break;

    case UPDATE_PRODUCTS:
      return {
        ...state,
        productData: {
          title: "",
          price: 0,
          description: "",
          image: "",
          category: "",
        },
      };
      break;

    case CHANGE_PRODUCT_INPUT:
      const productData = { ...state.productData };
      productData[payload.name] = payload.value;
      return { ...state, productData };
      break;

    case GET_PRODUCTS_BY_ID:
      return { ...state, productData: payload };
      break;

    case REMOVE_PRODUCTS_BY_ID:
      return {
        ...state,
        productData: {
          title: "",
          price: 0,
          description: "",
          image: "",
          category: "",
        },
      };
      break;

    default:
      return state;
  }
};
// export const productByIdReducers = (state = initialState, { payload, type }) => {
//   switch (type) {
//     case GET_PRODUCTS_BY_ID:
//       return { ...state, productData: payload };
//       break;

//     case REMOVE_PRODUCTS_BY_ID:
//       return { productData: {} };
//       break;

//     default:
//       return state;
//   }
// };
