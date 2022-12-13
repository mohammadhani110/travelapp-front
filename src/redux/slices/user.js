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

    // LOGOUT
    logout(state, action) {
      state.user = null;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { logout } = slice.actions;

// ----------------------------------------------------------------------
