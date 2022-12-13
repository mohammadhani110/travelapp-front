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

const tourSlice = createSlice({
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

    // GET TOURS
    getAllTourSuccess(state, action) {
      state.isLoading = false;
      state.tours = action.payload;
    },

    // GET TOUR DETAILS
    getTourDetailsSuccess(state, action) {
      state.isLoading = false;
      state.tourDetails = action.payload;
    },
  },
});

// Reducer
export default tourSlice.reducer;

// Actions
export const { getShowSuccess } = tourSlice.actions;

// ----------------------------------------------------------------------

export function getAllTours() {
  return async () => {
    dispatch(tourSlice.actions.startLoading());
    try {
      const response = await axiosDEF.get("/api/tours");
      dispatch(tourSlice.actions.getAllTourSuccess(response.data.data));
      return { error: null };
    } catch (error) {
      dispatch(tourSlice.actions.hasError(error));
      return { error };
    }
  };
}
// GET TOUR DETAILS
export function getTourDetails() {
  return async () => {
    dispatch(tourSlice.actions.startLoading());
    try {
      const response = await axiosDEF.get("/api/tours");
      dispatch(tourSlice.actions.getTourDetailsSuccess(response.data.data));
      return { error: null };
    } catch (error) {
      dispatch(tourSlice.actions.hasError(error));
      return { error };
    }
  };
}

// export function getShows() {
//   return async () => {
//     dispatch(tourSlice.actions.startLoading());
//     try {
//       let state = getState();

//       let id = state.persist.project_id;
//       const response = await axios.post(`/api/show/${id}`);
//       dispatch(tourSlice.actions.getShowsSuccess(response.data.data));
//     } catch (error) {
//       dispatch(tourSlice.actions.hasError(error));
//     }
//   };
// }

// export function getShow(id) {
//   return async () => {
//     dispatch(tourSlice.actions.startLoading());
//     try {
//       const response = await axios.get(`/api/show/${id}`);
//       dispatch(tourSlice.actions.getShowSuccess(response.data.data));
//     } catch (error) {
//       dispatch(tourSlice.actions.hasError(error));
//     }
//   };
// }

// export function getPlayLists(id) {
//   return async () => {
//     dispatch(tourSlice.actions.startLoading());
//     try {
//       const response = await axios.get(`/api/playlist/${id}`);
//       dispatch(tourSlice.actions.getPlaylistsSuccess(response.data.data));
//     } catch (error) {
//       dispatch(tourSlice.actions.hasError(error));
//     }
//   };
// }

// export function createPlaylist(data, id) {
//   return async () => {
//     dispatch(tourSlice.actions.startLoading());
//     try {
//       const response = await axios.post(`/api/playlist`, data);
//       // dispatch(tourSlice.actions.getShowSuccess(response.data.data));
//       dispatch(getSharedAssetIDs('clear'));
//       dispatch(tourSlice.actions.getPlaylistsSuccess(response.data.data));
//       return { error: null };
//     } catch (error) {
//       dispatch(tourSlice.actions.hasError(error));
//       return { error };
//     }
//   };
// }

// export function deletePlaylist(id) {
//   return async () => {
//     dispatch(tourSlice.actions.startLoading());
//     try {
//       const response = await axios.delete(`/api/playlist/${id}`);
//       // dispatch(tourSlice.actions.getShowSuccess(response.data.data));
//       dispatch(tourSlice.actions.getPlaylistsSuccess(response.data.data));
//       return { error: null };
//     } catch (error) {
//       dispatch(tourSlice.actions.hasError(error));
//       return { error };
//     }
//   };
// }

// export function updateShow(data, id) {
//   return async () => {
//     dispatch(tourSlice.actions.startLoading());
//     try {
//       const response = await axios.put(`/api/show/${id}`, data);
//       dispatch(tourSlice.actions.getShowSuccess(response.data.data));
//       return { error: null };
//     } catch (error) {
//       dispatch(tourSlice.actions.hasError(error));
//       return { error };
//     }
//   };
// }

// export function createShow(data) {
//   return async () => {
//     dispatch(tourSlice.actions.startLoading());
//     try {
//       const response = await axios.post(`/api/show`, data);
//       dispatch(tourSlice.actions.getShowSuccess(response.data.data));
//       return { error: null };
//     } catch (error) {
//       dispatch(tourSlice.actions.hasError(error));
//       return { error };
//     }
//   };
// }
