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

const bookingSlice = createSlice({
  name: "booking",
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

    // SET bookingS
    setBookings(state, action) {
      state.isLoading = false;
      state.error = null;
      state.bookings = action.payload;
    },
  },
});

// Reducer
export default bookingSlice.reducer;

// Actions
export const { setBookings } = bookingSlice.actions;
// ----------------------------------------------------------------------

export function getAllBookings() {
  return async () => {
    dispatch(bookingSlice.actions.startLoading());
    try {
      const response = await axiosDEF.get("/api/bookings");
      console.log("getAllBookings .data: ", response.data);
      dispatch(bookingSlice.actions.setBookings(response.data.bookings));
      return { error: null };
    } catch (error) {
      dispatch(bookingSlice.actions.hasError(error));
      return { error };
    }
  };
}
export function createBooking(data) {
  console.log(data);
  return async () => {
    dispatch(bookingSlice.actions.startLoading());
    try {
      const response = await axiosDEF.post("/api/bookings", data);
      console.log("createBooking data: ", response.data);
      dispatch(bookingSlice.actions.setBookings(response.data.bookings));
      return { error: null };
    } catch (error) {
      dispatch(bookingSlice.actions.hasError(error));
      return { error };
    }
  };
}
