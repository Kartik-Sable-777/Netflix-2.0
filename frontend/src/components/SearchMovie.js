import React, { useState } from 'react';
import axios from 'axios';
import { SEARCH_MOVIE_URL, options } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchMovieDetails } from '../redux/searchSlice';
import { setLoading } from '../redux/userSlice';
import MovieList from './MovieList';
import toast from 'react-hot-toast';

const SearchMovie = () => {
  const [searchMovie, setSearchMovie] = useState('');
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.app.isLoading);
  const { movieName, searchedMovie } = useSelector((store) => store.searchMovie);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!searchMovie.trim()) {
      toast.error('Please enter a movie name.');
      return;
    }

    dispatch(setLoading(true));

    try {
      const res = await axios.get(
        `${SEARCH_MOVIE_URL}${encodeURIComponent(searchMovie)}&include_adult=false&language=en-US&page=1`,
        options
      );

      const movies = res?.data?.results || [];
      if (movies.length === 0) toast('No movies found.');

      dispatch(setSearchMovieDetails({ searchMovie, movies }));
    } catch (error) {
      console.error('Search API Error:', error);
      toast.error('Failed to fetch movies. Please try again.');
    } finally {
      dispatch(setLoading(false));
      setSearchMovie('');
    }
  };

  return (
    <div className="min-h-screen bg-white pt-32">
      <div className="flex justify-center w-full mb-12">
        <form onSubmit={submitHandler} className="w-full max-w-2xl px-8">
          <div className="flex items-center justify-between shadow-xl border-2 border-gray-300 p-3 rounded-lg w-full bg-white">
            <input
              value={searchMovie}
              onChange={(e) => setSearchMovie(e.target.value)}
              className="w-full outline-none text-lg text-gray-900 placeholder-gray-500"
              type="text"
              placeholder="Search for movies..."
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-netflix-red text-white rounded-md px-8 py-3 font-semibold hover:bg-netflix-red-hover transition-colors whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </form>
      </div>

      <div className="min-h-[50vh]">
        {searchedMovie && searchedMovie.length > 0 ? (
          <MovieList
            title={movieName || 'Search Results'}
            searchMovie={true}
            movies={searchedMovie}
          />
        ) : (
          <h1 className="text-center text-2xl text-gray-600 font-semibold">
            No movies found
          </h1>
        )}
      </div>
    </div>
  );
};

export default SearchMovie;
