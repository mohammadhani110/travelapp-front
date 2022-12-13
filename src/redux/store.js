import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from "react-redux";
// import { persistStore, persistReducer } from "redux-persist";
// import { rootPersistConfig, rootReducer } from "./rootReducer";
import { rootReducer } from "./rootReducer";

// ----------------------------------------------------------------------

const store = configureStore({
  // reducer: persistReducer(rootPersistConfig, rootReducer),
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

// const persistor = persistStore(store);

const { dispatch, getState } = store;

const useSelector = useAppSelector;

const useDispatch = () => useAppDispatch();

export { store, dispatch, getState, useSelector, useDispatch };
