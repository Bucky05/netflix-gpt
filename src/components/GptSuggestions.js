import MovieList from './MovieList'
import React from 'react'
import { useSelector } from 'react-redux'
import GptMovieResult from './GptMovieResult'

const GptSuggestions = () => {
  const {movieResults, movieNames} = useSelector((store) => store.gpt)
  if(!(movieNames && movieResults) || movieNames ===  'Hmm.. can you describe more about what you want to watch') return null
  console.log("From suggest: "+movieResults);
  return (
    
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
      <div>
         <GptMovieResult   movies ={movieResults}></GptMovieResult>
      </div>
    </div>
  )
}

export default GptSuggestions
