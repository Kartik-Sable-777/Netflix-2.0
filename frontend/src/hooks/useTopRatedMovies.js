import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getTopRatedMovie } from "../redux/movieSlice";
import { Top_Rated_Movie, options } from "../utils/constant";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const res = await axios.get(Top_Rated_Movie, options);
        const results = res?.data?.results || [];
        dispatch(getTopRatedMovie(results));
      } catch (error) {
        console.error("Error fetching top rated movies:", error);
      }
    };

    fetchTopRatedMovies();
  }, [dispatch]); // ✅ runs once on mount
};

export default useTopRatedMovies;
