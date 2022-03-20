import { combineReducers } from "redux";
import { cattegoryListReducers } from "./category/categoryReducers";
import { productByIdReducers, productReducers } from "./products/productReducers";

const reducers = combineReducers({
  getAllProducts: productReducers,
  product: productByIdReducers,
  getAllCategoryList: cattegoryListReducers,
});
export default reducers;
