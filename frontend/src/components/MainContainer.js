import React from 'react';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);

  // safer check for movies array
  if (!movies || movies.length < 5) {
    return null; // return nothing until data is ready
  }

  const { overview, id, title } = movies[4];

  return (
    <div className='relative w-screen'>
      <VideoBackground movieId={id} />
      <VideoTitle title={title} overview={overview} />
    </div>
  );
};

export default MainContainer;
