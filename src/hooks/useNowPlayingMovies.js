import { API_URL, API_Options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies} from '../utils/movieSlice'
import React, { useEffect } from 'react'


const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
//this will show result twice because of react strict mode in local only
// because react renders twice to check inconsistency while developing
const getNowPlayingMovies = async () => {
  const data = await fetch(API_URL+'/now_playing',API_Options)
  const json = await data.json();
  console.log(json)
  dispatch(addNowPlayingMovies(json.results))
}

//[], to call only once
useEffect(() => {
  getNowPlayingMovies()
},[])
}

export default useNowPlayingMovies