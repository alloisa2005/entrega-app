'use client'

import React from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = ({ videoId }) => {
  // Set up event handlers
  const onReady = (event) => {
    // Access the player instance
    const player = event.target;

    // For example, you can automatically play the video
    player.pauseVideo();
  };

  const onError = (error) => {
    console.error('YouTube Player Error:', error);
  };

  const opts = {
    height: '370px',
    width: '100%',
    playerVars: {      
      autoplay: 1,      
    },
  };

  return (
    <div className='w-full h-[370px] border'>
      <YouTube 
        videoId={videoId}
        onReady={onReady}
        onError={onError}         
        opts={opts}           
      />
    </div>
  );
};

export default YouTubePlayer;