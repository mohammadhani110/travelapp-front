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
  tours: [],
  tourDetails: {},
};

const slice = createSlice({
  name: "tour",
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

    // SET TOURS
    setAllTour(state, action) {
      state.isLoading = false;
      state.tours = action.payload;
    },

    // SET TOUR DETAILS
    setTourDetails(state, action) {
      state.isLoading = false;
      state.tourDetails = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { setAllTour } = slice.actions;
// ----------------------------------------------------------------------

export function getAllTours() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axiosDEF.get("/api/tours");
      console.log("response.data.data: ", response.data.data);
      dispatch(slice.actions.setAllTour(response.data.data.tours));
      return { error: null };
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      return { error };
    }
  };
}
