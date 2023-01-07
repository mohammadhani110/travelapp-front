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
};

const slice = createSlice({
  name: "user",
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
    },
    setUserLogin(state, action) {
      state.isLoading = false;
      state.user = action.payload;
      state.error = false;
    },
    // LOGOUT
    logout(state, action) {
      state.user = null;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { logout, setUserLogin } = slice.actions;

// ----------------------------------------------------------------------

export function authenticateUser(data) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axiosDEF.post("/api/users/login", data);
      console.log("response.data.data: ", response.data.data);
      dispatch(slice.actions.setUserLogin(response.data.data));
      return { error: null };
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      return { error };
    }
  };
}
