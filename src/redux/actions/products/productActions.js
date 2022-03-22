import {
  addProduct,
  getAllProduct,
  getCategoryByProduct,
  getProductDetails,
  getProductSorting,
  updateProduct,
} from "../../../utils/api";
import {
  CHANGE_PRODUCT_INPUT,
  GET_PRODUCTS_BY_ID,
  INSERT_PRODUCTS,
  REMOVE_PRODUCTS_BY_ID,
  SET_PRODUCTS,
  UPDATE_PRODUCTS,
} from "../../contants/action-type";

export const setProductsList = () => async (dispatch) => {
  const products = await getAllProduct();
  dispatch({
    type: SET_PRODUCTS,
    payload: products,
  });
};
export const getCategoryByProductList = (category) => async (dispatch) => {
  const products = await getCategoryByProduct(category);
  dispatch({
    type: SET_PRODUCTS,
    payload: products,
  });
};
export const getSortingByProductList = (sorting) => async (dispatch) => {
  const products = await getProductSorting(sorting);
  dispatch({
    type: SET_PRODUCTS,
    payload: products,
  });
};

export const addProductInfo = (products) => async (dispatch) => {
  const insert = await addProduct(products);

  if (insert) {
    dispatch({
      type: INSERT_PRODUCTS,
      payload: insert,
    });
    dispatch(setProductsList());

    alert("Save succefully");
  } else {
    alert("Save Not succefully");
  }
};
export const updateProductInfo = (products) => async (dispatch) => {
  const udpate = await updateProduct(products);

  if (udpate) {
    dispatch({
      type: UPDATE_PRODUCTS,
      payload: udpate,
    });
    dispatch(setProductsList());

    alert("Update succefully");
  } else {
    alert("Update Not succefully");
  }
};

export const getProductByProductId = (id) => async (dispatch) => {
  const products = await getProductDetails(id);
  dispatch({
    type: GET_PRODUCTS_BY_ID,
    payload: products,
  });
};
export const removeProductByProductId = () => {
  return {
    type: REMOVE_PRODUCTS_BY_ID,
  };
};

export const handleInputChange = (event) => (dispatch) => {
  const { name, value } = event.target;
  const inputData = {
    name,
    value,
  };
  dispatch({
    type: CHANGE_PRODUCT_INPUT,
    payload: inputData,
  });
};
