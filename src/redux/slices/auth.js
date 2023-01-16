import { createSlice } from "@reduxjs/toolkit";
// import sum from 'lodash/sum';
// import uniqBy from 'lodash/uniqBy';
// utils
import { axiosDEF, axiosJWT } from "../../utils/axios";
//
import { dispatch, getState } from "../store";

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: null,
  user: null,
  isLoggedIn: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
      state.isLoggedIn = false;
    },
    setLogin(state, action) {
      state.isLoading = false;
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    // LOGOUT
    setLogout(state) {
      state.isLoading = false;
      state.user = null;
      state.error = false;
      state.isLoggedIn = false;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { setLogout, setLogin } = slice.actions;

// ----------------------------------------------------------------------

export function authenticateUser(data) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axiosDEF.post("/api/users/login", data);
      console.log("response.data: ", response.data);
      dispatch(slice.actions.setLogin(response.data));
      localStorage.setItem("user", JSON.stringify(response.data));
      return { error: null };
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      return { error: error?.data };
    }
  };
}

export function registerUser(data) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axiosDEF.post("/api/users/register", data);
      console.log("response.data: ", response.data);
      dispatch(slice.actions.setLogin(response.data));
      localStorage.setItem("user", JSON.stringify(response.data));
      return { error: null };
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      return { error: error?.data };
    }
  };
}
export function logoutUser() {
  return async () => {
    dispatch(slice.actions.setLogout());
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    return { message: "user is logged out" };
  };
}
