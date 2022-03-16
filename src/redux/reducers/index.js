import { combineReducers } from "redux";
import { productByIdReducers, productReducers } from "./products/productReducers";

const reducers = combineReducers({
  getAllProducts: productReducers,
  product: productByIdReducers,
});
export default reducers;
