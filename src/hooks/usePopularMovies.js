import { API_URL, API_Options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addPopularMovies} from '../utils/movieSlice'
import React, { useEffect } from 'react'


const usePopularMovies = () => {
    const dispatch = useDispatch()
//this will show result twice because of react strict mode in local only
// because react renders twice to check inconsistency while developing
const getPopularMovies = async () => {
  const data = await fetch(API_URL+'/popular?page=1',API_Options)
  const json = await data.json();
  console.log(json)
  dispatch(addPopularMovies(json.results))
}

//[], to call only once
useEffect(() => {
  getPopularMovies()
}, [])

}

export default usePopularMovies