import MovieList from './MovieList'
import React from 'react'
import { useSelector } from 'react-redux'

const GptSuggestions = () => {
  const {movieResults, movieNames} = useSelector((store) => store.gpt)
  if(!movieNames) return null
  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
      <div>
        {movieNames.map((movieName,index) => <MovieList key={movieName} title = {movieName} movies ={movieResults[index]}></MovieList>)}
        <MovieList title={movieNames[0]} movies = {movieResults[0]}/>
      </div>
    </div>
  )
}

export default GptSuggestions
