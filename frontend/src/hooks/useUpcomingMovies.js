import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUpcomingMovie } from "../redux/movieSlice";
import { Upcoming_Movie, options } from "../utils/constant";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const res = await axios.get(Upcoming_Movie, options);
        const results = res?.data?.results || [];
        dispatch(getUpcomingMovie(results));
      } catch (error) {
        console.error("Error fetching upcoming movies:", error);
      }
    };

    fetchUpcomingMovies();
  }, [dispatch]); // ✅ Runs only once when mounted
};

export default useUpcomingMovies;
