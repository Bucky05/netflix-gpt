import React from 'react';
import MovieCard from './MovieCard';
import { Link } from "react-router-dom"


const GptMovieResult = ( {movies}) => {

     
  return (
    <div className='px-2 w-full'>
        <h1 className='text-lg md:text-3xl py-4 text-white'>Here is what we have found matching your description</h1>
           
            <div className='flex flex-wrap '>
                {movies?.length > 0 && movies.map((movie) => (<Link to={'/browse/movie/'+movie[0].id}>
                <MovieCard posterPath={ movie[0].poster_path} /></Link> ))}
                 
            </div>
       
    </div>
  )
}

export default GptMovieResult
