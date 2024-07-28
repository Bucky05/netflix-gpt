
import { useDispatch, useSelector } from "react-redux"
import { API_URL , API_Options } from "../utils/constants"
import { addTrailerVideo } from "../utils/movieSlice"
import { useEffect, useState } from "react"
const useMovieTrailer = (movieId) => {
    const [loading,setLoading] = useState(true)
    const dispatch = useDispatch()
    const getMovieVideos = async () => {
      
        const data = await fetch(API_URL+"/"+movieId+"/videos",API_Options)
        const json = await data.json()
        let trailer = json.results.filter(video => video.type === 'Trailer')
        trailer = trailer.length ? trailer[0] : json.results[0]
        dispatch(addTrailerVideo(trailer))
        setLoading(false)
        return loading
    }
    
    useEffect(() => {
        getMovieVideos()
    },[movieId])
    return loading
}

export default useMovieTrailer
