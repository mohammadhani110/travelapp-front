import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
// slices
import tourReducer from "./slices/tour";
import persistStateReducer from "./slices/persist";
import userReducer from "./slices/user";

// ----------------------------------------------------------------------

const createNoopStorage = () => ({
  getItem() {
    return Promise.resolve(null);
  },
  setItem(_key, value) {
    return Promise.resolve(value);
  },
  removeItem() {
    return Promise.resolve();
  },
});

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const tourPersistConfig = {
  key: "tour",
  storage,
  keyPrefix: "redux-",
  // whitelist: ["sortBy", "checkout"],
};

const userPersistConfig = {
  key: "user",
  storage,
  keyPrefix: "redux-",
  // whitelist: ['sortBy', 'checkout'],
};
const statePersistConfig = {
  key: "persist",
  storage,
  keyPrefix: "redux-",
  // whitelist: ['sortBy', 'checkout'],
};

const appReducer = combineReducers({
  tour: persistReducer(tourPersistConfig, tourReducer),
  // persist: persistReducer(statePersistConfig, persistStateReducer),
  user: persistReducer(userPersistConfig, userReducer),
});

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === "user/logout") {
    state = undefined;
    storage.removeItem("persist:root");
    storage.removeItem("persist:persist");
  }

  return appReducer(state, action);
};

export { rootPersistConfig, rootReducer };
