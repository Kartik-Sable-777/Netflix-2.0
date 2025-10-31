// src/utils/constant.js

// Use environment variable for backend API (Render/Production)
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

// Backend API endpoint
export const API_END_POINT = `${API_BASE_URL}/api/v1/user`;

// TMDB API config (use your own Bearer token if needed)
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGJlZjViMDUzNWE3OGYwMjllMTQ0NDE5NTQ4MjM4MCIsInN1YiI6IjY1MDRhMjNkNTllOGE5MDExZWNhYTVjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LTBaAb_2NPRGPr2HeGszyFDP-onLh-fiL7fzmnOFZUg",
  },
};

// TMDB Endpoints
export const Now_Playing_Movie = "https://api.themoviedb.org/3/movie/now_playing";
export const Popular_Movie = "https://api.themoviedb.org/3/movie/popular";
export const Top_Rated_Movie = "https://api.themoviedb.org/3/movie/top_rated";
export const Upcoming_Movie = "https://api.themoviedb.org/3/movie/upcoming";
export const SEARCH_MOVIE_URL = "https://api.themoviedb.org/3/search/movie?query=";

// TMDB Image URL
export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";
