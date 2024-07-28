import { API_URL, API_Options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUpcomingMovies} from '../utils/movieSlice'
import React, { useEffect } from 'react'


const useUpcomingMovies = () => {
    const dispatch = useDispatch()
  const popularMovies = useSelector(store => store.movies.popularMovies)
//this will show result twice because of react strict mode in local only
// because react renders twice to check inconsistency while developing
const getUpcomingMovies = async () => {
  const data = await fetch(API_URL+'/upcoming?page=1',API_Options)
  const json = await data.json();
  dispatch(addUpcomingMovies(json.results))
}

//[], to call only once
useEffect(() => {
 !popularMovies && getUpcomingMovies()
}, [])

}

export default useUpcomingMovies