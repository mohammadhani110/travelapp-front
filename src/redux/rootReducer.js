import { combineReducers } from "redux";
// slices
import userReducer from "./slices/user";
import tourReducer from "./slices/tour";

// ----------------------------------------------------------------------
const appReducer = combineReducers({
  tour: tourReducer,
  user: userReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export { rootReducer };
