import React from 'react'
import ShimmerCard from './ShimmerCard'

const ShimmerView = () => {
  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
    <div className='px-2 w-full'>
    <h1 className='text-lg md:text-3xl py-4 text-white'>Doing AI stuff to generate results...</h1>
       
        <div className='flex flex-wrap '>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            </div>
        </div>
   
</div>
  )
}

export default ShimmerView
