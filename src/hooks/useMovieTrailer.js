
import { useDispatch } from "react-redux"
import { API_URL , API_Options } from "../utils/constants"
import { addTrailerVideo } from "../utils/movieSlice"
import { useEffect } from "react"
const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()
    const getMovieVideos = async () => {
     
        const data = await fetch(API_URL+"/"+movieId+"/videos",API_Options)
        const json = await data.json()
        console.log(json)
        let trailer = json.results.filter(video => video.type === 'Trailer')
        trailer = trailer.length ? trailer[0] : json.results[0]
        console.log(trailer)
        dispatch(addTrailerVideo(trailer))
    }
    
    useEffect(() => {
        getMovieVideos()
    },[])
}

export default useMovieTrailer
