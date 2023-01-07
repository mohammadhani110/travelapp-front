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
  whitelist: ["tour"],
};

const userPersistConfig = {
  key: "user",
  storage,
  keyPrefix: "redux-",
  blacklist: ["isloggedIn"],
  // whitelist: ['sortBy', 'checkout'],
};
// const tourPersistConfig = {
//   key: "tour",
//   storage,
//   keyPrefix: "redux-",
//   whitelist: ["tours"],
// };
// const statePersistConfig = {
//   key: "persist",
//   storage,
//   keyPrefix: "redux-",
//   // whitelist: ['sortBy', 'checkout'],
// };

const appReducer = combineReducers({
  // persist: persistReducer(statePersistConfig, persistStateReducer),
  // tour: persistReducer(tourPersistConfig, tourReducer),
  tour: tourReducer,
  user: persistReducer(userPersistConfig, userReducer),
});

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === "user/setLogout") {
    console.log("Logout");
    // state = {};
    // storage.removeItem("persist:root");
    // storage.removeItem("persist:tour");
    storage.removeItem("persist:user");
    localStorage.removeItem("redux-user");
    // storage.removeItem("persist:persist");
    // window.location.pathname = "/tours";
  }

  return appReducer(state, action);
};

export { rootPersistConfig, rootReducer };
