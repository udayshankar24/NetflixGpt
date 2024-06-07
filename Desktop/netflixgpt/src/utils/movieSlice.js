import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addUpComing: (state, action) => {
      state.upComing = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addUpComing } = movieSlice.actions;

export default movieSlice.reducer;
