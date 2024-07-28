import { API_URL, API_Options } from '../utils/constants'
import { useDispatch ,useSelector } from 'react-redux'
import { addNowPlayingMovies} from '../utils/movieSlice'
import React, { useEffect } from 'react'


const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
  const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)
//this will show result twice because of react strict mode in local only
// because react renders twice to check inconsistency while developing
const getNowPlayingMovies = async () => {
  const data = await fetch(API_URL+'/now_playing',API_Options)
  const json = await data.json();
  dispatch(addNowPlayingMovies(json.results))
}

//[], to call only once
useEffect(() => {
  if(!nowPlayingMovies)
    getNowPlayingMovies()
}, [])

}

export default useNowPlayingMovies