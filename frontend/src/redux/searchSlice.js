import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieName: "",
  searchedMovie: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchMovieDetails: (state, action) => {
      const { searchMovie, movies } = action.payload;
      state.movieName = searchMovie || "";
      state.searchedMovie = movies || [];
    },
  },
});

export const { setSearchMovieDetails } = searchSlice.actions;
export default searchSlice.reducer;
