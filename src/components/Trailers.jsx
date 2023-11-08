import React from 'react'
import YouTubePlayer from './YoutubePlayer'

const Trailers = ({trailers}) => {
  return (
    <div className='contenedor my-8'>
      <p className='text-2xl font-bold border-b-2 border-black'>Trailers</p>

      <div className='flex items-center justify-between w-full gap-6 mt-4'>

        {
          trailers.map((trailer, index) => (
            <YouTubePlayer key={index} videoId={trailer}/>
          ))
        }
                
      </div>
    </div>
  )
}

export default Trailers