import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[10%] px-20 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='text-lg py-6 w-1/4 h-[100px] overflow-hidden text-ellipsis'>{overview}</p>
      <div className='py-6'>
        <button className='bg-white text-black p-4 px-12 rounded-md text-xl font-bold hover:bg-opacity-50' > ▶ Play</button>
        <button className='bg-white text-white p-4 px-12 mx-2 rounded-md text-xl bg-opacity-40'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
