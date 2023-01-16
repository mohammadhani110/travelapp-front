import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
// slices
import persistStateReducer from "./slices/persist";
import tourReducer from "./slices/tour";
import authReducer from "./slices/auth";
import bookingReducer from "./slices/booking";

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

const authPersistConfig = {
  key: "auth",
  storage,
  keyPrefix: "redux-",
  blacklist: ["isloggedIn"],
  // whitelist: ['sortBy', 'checkout'],
};

const bookingPersistConfig = {
  key: "booking",
  storage,
  keyPrefix: "redux-",
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
  booking: persistReducer(bookingPersistConfig, bookingReducer),
  auth: persistReducer(authPersistConfig, authReducer),
});

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === "auth/setLogout") {
    console.log("Logout");
    // state = {};
    // storage.removeItem("persist:root");
    // storage.removeItem("persist:tour");
    storage.removeItem("persist:auth");
    localStorage.removeItem("redux-auth");
    // storage.removeItem("persist:persist");
    // window.location.pathname = "/tours";
  }

  return appReducer(state, action);
};

export { rootPersistConfig, rootReducer };
