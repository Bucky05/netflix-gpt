import MovieList from './MovieList'
import React from 'react'
import { useSelector } from 'react-redux'
import GptMovieResult from './GptMovieResult'
import ShimmerView from './ShimmerView'

const GptSuggestions = () => {
  const {movieResults, movieNames , shimmerView} = useSelector((store) => store.gpt)
  if(shimmerView) {
    return (<ShimmerView/>)
  }
  if(!(movieNames && movieResults)  ) return null
  else if(movieNames ===  'Hmm.. can you describe more about what you want to watch')
      return (<div className='p-4 m-4 bg-black text-white bg-opacity-90'>{movieNames} </div>)
  return (
    
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
      <div>
         <GptMovieResult   movies ={movieResults}></GptMovieResult>
      </div>
    </div>
  )
}

export default GptSuggestions
