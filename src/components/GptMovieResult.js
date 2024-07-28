import React from 'react';
import MovieCard from './MovieCard';
import { useRef, useState,useEffect } from 'react';


const GptMovieResult = ( {movies}) => {

     
  return (
    <div className='px-2 w-full'>
        <h1 className='text-lg md:text-3xl py-4 text-white'>Here is what we have found matching your description</h1>
           
            <div className='flex flex-wrap '>
                {movies?.length > 0 && movies.map((movie) => (<MovieCard posterPath={ movie[0].poster_path} /> ))}
                 
            </div>
       
    </div>
  )
}

export default GptMovieResult
