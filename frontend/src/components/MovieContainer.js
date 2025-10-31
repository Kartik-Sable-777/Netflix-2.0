import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const MovieContainer = () => {
  const movie = useSelector((store) => store.movie);

  // If movies aren't loaded yet, return nothing
  if (
    !movie ||
    !movie.nowPlayingMovies ||
    !movie.popularMovie ||
    !movie.topRatedMovies ||
    !movie.upcomingMovies
  )
    return null;

  return (
    <div className='bg-netflix-black relative z-10 -mt-20'>
      <div className='pt-52 space-y-12'>
        <MovieList title='Popular Movies' movies={movie.popularMovie} />
        <MovieList title='Now Playing' movies={movie.nowPlayingMovies} />
        <MovieList title='Top Rated' movies={movie.topRatedMovies} />
        <MovieList title='Upcoming' movies={movie.upcomingMovies} />
      </div>
    </div>
  );
};

export default MovieContainer;
