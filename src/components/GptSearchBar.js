import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector , useDispatch } from 'react-redux'
import { useRef } from 'react'
import { API_Options } from '../utils/constants'
import model from '../utils/openai'
import { addGptMovieResult, toggleShimmerView } from '../utils/gptSlice'


const GptSearchBar = () => {
  const searchText = useRef(null)
  const dispatch = useDispatch()
const handleGptSearchClick = async () => {
  //Make api call to GPT get movie results
  try {
    dispatch(toggleShimmerView(true))
    const prompt = "you are a movie recommendation tool suggest upto 25  movies  titles  for query : "+searchText.current.value +" give comma separated like the example result given ahead. Example Result: movei1, movie2 , movie3. IF you dont understand what movies to give reply 'Hmm.. can you describe more about what you want to watch', just once"
    const genAIResult = await model.generateContent(prompt);
    let response = await genAIResult.response
    response = await response.text()
    
    if(response.includes('Hmm.. can you describe more about what you want to watch')) {
      dispatch(toggleShimmerView(false))
      dispatch(addGptMovieResult({movieNames: 'Hmm.. can you describe more about what you want to watch' , movieResults : []}))
    }  else {
    const  suggestedMovies = await response.split(",")
    const promiseArray = suggestedMovies.map((movie) => searchMovieTMDB(movie))
    // promise array is returned

    let tmdbResult = await Promise.all(promiseArray)

    dispatch(addGptMovieResult({movieNames: suggestedMovies , movieResults : tmdbResult}))
    dispatch(toggleShimmerView(false))
    }
}catch(err) {
  dispatch(toggleShimmerView(false))
  console.log(err)
}

}

// serach movies with name
const searchMovieTMDB = async (movie) => {
  const data = await fetch(
    "https://api.themoviedb.org/3/search/movie?query="+ movie +
   "&include_adult=false&language=en-US&page=1",
   API_Options
  );
  const json =await data.json()

  return json.results
}
const selectedLang = useSelector(store => store.config.lang)
  return (
    <div className='pt-[40%] md:pt-[10%] flex justify-center'>
      <form className='w-full md:w-1/2 grid grid-cols-12 bg-black' onSubmit={((e) => e.preventDefault())}>
        <input ref = {searchText} input type="text" className='p-4 m-4 col-span-9' placeholder={lang[selectedLang].gptSearchBarText}/>
        <button className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3' onClick={handleGptSearchClick}> {lang[selectedLang].search} </button>
      </form>
    </div>
  )
}

export default GptSearchBar
