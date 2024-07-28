import { createSlice } from "@reduxjs/toolkit"
const gptSlice = createSlice({
    name: 'gpt',
    initialState:{
        showGptSearch : false,
        gptMovies: null,
        movieNames : null,
        movieResults: null,
        shimmerView : false
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovieResult: (state,action) => {
            const {movieNames, movieResults} = action.payload
            state.movieNames = movieNames
            state.movieResults = movieResults
        },
        toggleShimmerView: (state,action) => {
            state.shimmerView = action.payload
        }
    }
})

export const {toggleGptSearchView , addGptMovieResult, toggleShimmerView} = gptSlice.actions;
export default gptSlice.reducer