import React, { useEffect } from 'react';
import useMovieById from '../hooks/useMovieById';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId, bool }) => {
  const trailerMovie = useSelector((store) => store.movie.trailerMovie);

  // Load trailer info via custom hook
  useMovieById(movieId);

  // Safety: reset or skip rendering if trailerMovie not yet loaded
  useEffect(() => {
    if (!movieId) console.warn('⚠️ No movieId provided to VideoBackground');
  }, [movieId]);

  // ✅ Defensive checks to prevent runtime errors
  if (!trailerMovie || !trailerMovie.key) {
    return (
      <div
        className={`${
          bool ? 'w-full aspect-video' : 'w-screen h-screen absolute top-0 left-0'
        } bg-black flex items-center justify-center text-gray-400 text-lg`}
      >
        Loading trailer...
      </div>
    );
  }

  const youtubeUrl = `https://www.youtube.com/embed/${trailerMovie.key}?autoplay=1&mute=1&loop=1&playlist=${trailerMovie.key}&controls=0&rel=0&modestbranding=1`;

  return (
    <div className="overflow-hidden">
      <iframe
        className={`${
          bool
            ? 'w-full aspect-video'
            : 'w-screen h-screen absolute top-0 left-0 pointer-events-none'
        }`}
        src={youtubeUrl}
        title="Movie Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
