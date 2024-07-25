import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies);
  return (
    <div className='bg-black '>
      <div className=' mt-0 md:-mt-96 relative pl-10 z-20'>
      <MovieList title ={"Now Playing"} movies ={movies.nowPlayingMovies}/>
      <MovieList title ={"Popular"} movies ={movies.popularMovies}/>
      <MovieList title ={"Adventure"} movies ={movies.nowPlayingMovies}/>
      <MovieList title ={""} movies ={movies.nowPlayingMovies}/>
      <MovieList title ={"Now Playing"} movies ={movies.nowPlayingMovies}/>
      <MovieList title ={"Now Playing"} movies ={movies.nowPlayingMovies}/>

      </div>
    </div>
  )
}

export default SecondaryContainer
