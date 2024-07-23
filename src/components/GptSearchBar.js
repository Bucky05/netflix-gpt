import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

const selectedLang = useSelector(store => store.config.lang)
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 grid grid-cols-12 bg-black'>
        <input type="text" className='p-4 m-4 col-span-9' placeholder={lang[selectedLang].gptSearchBarText}/>
        <button className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3'> {lang[selectedLang].search} </button>
      </form>i
    </div>
  )
}

export default GptSearchBar