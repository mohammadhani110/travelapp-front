import { createSlice } from "@reduxjs/toolkit";

import { dispatch, getState } from "../store";

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: null,
  tourId: null,
  tours: [],
};

const slice = createSlice({
  name: "persist",
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

    // GET TourId
    setTourId(state, action) {
      state.isLoading = false;
      state.tourId = action.payload;
      state.tours = [];
    },

    setTours(state, action) {
      state.isLoading = false;
      state.tours = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { setTourId, setTours } = slice.actions;

// ----------------------------------------------------------------------
