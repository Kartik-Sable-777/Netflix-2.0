import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Popular_Movie, options } from "../utils/constant";
import { getPopularMovie } from "../redux/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const res = await axios.get(Popular_Movie, options);
        const results = res?.data?.results || [];
        dispatch(getPopularMovie(results));
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    fetchPopularMovies();
  }, [dispatch]); // ✅ only runs once when mounted
};

export default usePopularMovies;
