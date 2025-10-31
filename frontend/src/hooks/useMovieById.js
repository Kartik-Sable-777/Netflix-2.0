import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getTrailerMovie } from "../redux/movieSlice";
import { options } from "../utils/constant";

const useMovieById = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return; // ✅ prevent API call if id missing

    const getMovieById = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          options
        );

        const results = res?.data?.results || [];
        if (results.length === 0) return;

        const trailer = results.find((item) => item.type === "Trailer") || results[0];
        dispatch(getTrailerMovie(trailer));
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    };

    getMovieById();
  }, [movieId, dispatch]); // ✅ include dependencies
};

export default useMovieById;
