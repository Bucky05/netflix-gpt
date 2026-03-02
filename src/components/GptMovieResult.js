import React from 'react';
import MovieCard from './MovieCard';
import { Link } from "react-router-dom"


const GptMovieResult = ( {movies}) => {

  return (
    <div className="px-2 w-full">
      <h1 className="text-lg md:text-3xl py-4 text-white">
        Here is what we have found matching your description
      </h1>

      <div className="flex flex-wrap">
        {movies?.length > 0 &&
          movies.map((movie) => {
            const movieData = movie[0];

            if (!movieData || !movieData.id) return null;

            return (
              <Link key={movieData.id} to={"/browse/movie/" + movieData.id}>
                <MovieCard posterPath={movieData.poster_path} />
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default GptMovieResult
