import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getNowPlayingMovies } from "../redux/movieSlice";
import { Now_Playing_Movie, options } from "../utils/constant";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await axios.get(Now_Playing_Movie, options);
        const results = res?.data?.results || [];
        dispatch(getNowPlayingMovies(results));
      } catch (error) {
        console.error("Error fetching now playing movies:", error);
      }
    };

    fetchNowPlaying();
  }, [dispatch]); // ✅ runs once when component mounts
};

export default useNowPlayingMovies;
