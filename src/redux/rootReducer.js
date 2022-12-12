import { combineReducers } from "redux";
// slices
import productReducer from "./slices/product";
import showReducer from "./slices/show";
import persistStateReducer from "./slices/persist";
import userReducer from "./slices/user";

// ----------------------------------------------------------------------
const appReducer = combineReducers({
  product: productReducer,
  show: showReducer,
  user: userReducer,
});

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  return appReducer(state, action);
};

export { rootReducer };
