import { combineReducers } from "redux";
import { categoryListReducers } from "./category/categoryReducers";
import { productByIdReducers, productListReducers } from "./products/productListReducers";
import { productReducers } from "./products/productReducers";

const reducers = combineReducers({
  getAllProducts: productListReducers,
  product: productByIdReducers,
  getAllCategoryList: categoryListReducers,
  insertProduct: productReducers,
});
export default reducers;
