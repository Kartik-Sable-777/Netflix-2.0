import React from 'react';
import { TMDB_IMG_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { getId, setOpen } from '../redux/movieSlice';

const MovieCard = ({ posterPath, movieId }) => {
  const dispatch = useDispatch();

  // Avoid rendering if image not available
  if (!posterPath) return null;

  const handleOpen = () => {
    dispatch(getId(movieId));
    dispatch(setOpen(true));
  };

  return (
    <div
      className='w-48 pr-4 cursor-pointer transition-transform hover:scale-105 duration-200'
      onClick={handleOpen}
    >
      <div className='rounded-md overflow-hidden shadow-lg bg-gray-900'>
        <img
          className='w-full h-full object-cover'
          src={`${TMDB_IMG_URL}${posterPath.startsWith('/') ? posterPath : `/${posterPath}`}`}
          alt='movie-poster'
          loading='lazy'
        />
      </div>
    </div>
  );
};

export default MovieCard;
