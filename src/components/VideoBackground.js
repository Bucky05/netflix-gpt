import React, { useEffect, useState } from 'react'
import '../hooks/useMovieTrailer'
import { useParams } from 'react-router-dom'
import useMovieTrailer from '../hooks/useMovieTrailer'
import { useSelector } from 'react-redux'
const VideoBackground = ({movieId}) => {
 

const param = useParams()
if(param.movieId){ movieId = param.movieId }
 const loading = useMovieTrailer(movieId)
 let trailer = useSelector((store) => store.movies?.trailerVideo)


 if (loading) {
  return <div className='w-full h-screen bg-black flex justify-center items-center'>
      <div className='flex items-center'>
        <div className='border-4 border-black border-t-red-600 rounded-3xl w-10 h-10 animate-spin '></div>
        <p className='text-white ml-2'>Loading...</p>
      </div>
    </div>; 
 }

  return (
    
      (
    <div>
      <iframe className='w-screen aspect-video'
      src={"https://www.youtube.com/embed/"+trailer?.key+"?autoplay=1&mute=1" }
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      frameBorder='0'
      allowfullscreen>

      </iframe>
    </div>
    )

  )
}

export default VideoBackground
