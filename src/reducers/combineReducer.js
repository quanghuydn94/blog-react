import { combineReducers } from "redux";

import { bankingReducer } from "./bankingReducers";
import { authReducers } from "./authReducers";

export const rootReducer = combineReducers({
  auth: authReducers,
  banking: bankingReducer,
});
