import { combineReducers } from "redux";
import { categoryListReducers } from "./category/categoryReducers";
import { productListReducers } from "./products/productListReducers";

const reducers = combineReducers({
  getAllProducts: productListReducers,
  getAllCategoryList: categoryListReducers,
});
export default reducers;
