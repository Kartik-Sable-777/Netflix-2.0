import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies = [], searchMovie = false }) => {
  // Handle loading or empty state
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-8 md:px-12 py-6">
      <h1
        className={`${
          searchMovie ? 'text-black' : 'text-white'
        } text-2xl md:text-3xl font-bold mb-4 ml-2`}
      >
        {title}
      </h1>

      <div className="flex overflow-x-auto no-scrollbar cursor-pointer space-x-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movieId={movie.id}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
