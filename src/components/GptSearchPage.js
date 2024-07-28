import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSuggestions from './GptSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
    <div className="absolute -z-10 ">
    <img className="h-screen md:h-auto object-cover fixed"src={BG_URL} alt='bg'/>
  </div>
    <div >
    
      <GptSearchBar/>
      <GptSuggestions/>
    </div>
    </>
  )
}

export default GptSearch
