import { combineReducers } from "redux";
// slices
// import productReducer from "./slices/product";
// import showReducer from "./slices/show";
// import persistStateReducer from "./slices/persist";
import userReducer from "./slices/user";
import tourReducer from "./slices/tour";

// ----------------------------------------------------------------------
const appReducer = combineReducers({
  tour: tourReducer,
  user: userReducer,
});

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  return appReducer(state, action);
};

export { rootReducer };
