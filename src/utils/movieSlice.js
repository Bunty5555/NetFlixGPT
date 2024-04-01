import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: { nowPlayingMovies: null },
  trailerVideo: null,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.addTrailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.addNowPlayingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.addTopRatedMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.addUpComingMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpComingMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
