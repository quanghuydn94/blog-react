import { combineReducers } from "redux";
import { blogReducer } from "./blog";
import { productReducer } from "./productReducer";

const rootReducer = combineReducers({
  allProducts: productReducer,
  blogs: blogReducer,
});
export default rootReducer;
