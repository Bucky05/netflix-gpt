import React, { useEffect } from 'react'
import '../hooks/useMovieTrailer'
import { useParams } from 'react-router-dom'
import useMovieTrailer from '../hooks/useMovieTrailer'
import { useSelector } from 'react-redux'
const VideoBackground = ({movieId}) => {
 

const param = useParams()
if(param.movieId){ movieId = param.movieId }
 useMovieTrailer(movieId)
 let trailer = useSelector((store) => store.movies?.trailerVideo)
 useEffect(() => {
  // Optionally, you can add additional logic here
}, [trailer]);

if (!trailer) {
  return <div>Loading...</div>; // Handle loading state if needed
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
