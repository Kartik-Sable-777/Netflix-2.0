import React from 'react';
import { CiPlay1, CiCircleInfo } from 'react-icons/ci';

const VideoTitle = ({ title = '', overview = '' }) => {
  return (
    <div className="absolute z-10 text-white pt-[20vh] px-6 md:px-12 pb-[15%] w-full fade-bottom">
      <h1 className="text-3xl md:text-6xl font-bold mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
        {title || 'Untitled'}
      </h1>

      {overview && (
        <p className="w-full md:w-2/5 mt-6 text-base md:text-lg leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          {overview}
        </p>
      )}

      <div className="flex flex-wrap gap-4 mt-8">
        <button className="flex items-center gap-2 px-8 md:px-10 py-3 bg-white text-black rounded text-lg font-semibold hover:bg-opacity-80 transition-all duration-300 shadow-lg">
          <CiPlay1 size={28} />
          <span>Play</span>
        </button>
        <button className="flex items-center gap-2 px-8 md:px-10 py-3 bg-white/30 text-white rounded text-lg font-semibold backdrop-blur-sm hover:bg-white/40 transition-all duration-300 shadow-lg">
          <CiCircleInfo size={28} />
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
