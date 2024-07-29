import React from 'react'
import { Link } from 'react-router-dom'

const VideoTitle = ({title, overview,movieId}) => {
 
  return (
    <div className='w-screen aspect-video pt-[10%] px-4 md:px-20 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block text-lg py-6 w-1/4 h-[100px] overflow-hidden text-ellipsis'>{overview}</p>
      <div className='mt-6 md:mt-0 py-6 flex'>
        <Link to={'/browse/movie/'+movieId}> <button className='bg-white flex text-black py-2 md:py-4 px-3 items-center flex-row md:px-12 rounded-md text-xl font-bold hover:bg-opacity-50' > <img className='w-5 mr-2'alt='' src='/play.png'></img> <span> Play</span></button></Link>
        <button className='hidden md:inline-block bg-white text-white p-4 px-12 mx-2 rounded-md text-xl bg-opacity-40'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
