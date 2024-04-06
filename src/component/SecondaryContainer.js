import React from "react";
import { useSelector } from "react-redux";

import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  console.log("movies", movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-[#141414]">
        <div className="-mt-52 pl-12 relative z-20">
          <MovieList
            title={"Now Playing Movies"}
            movies={movies.nowPlayingMovies}
          />
          <MovieList title={"Top Rated"} movies={movies.addTopRatedMovies} />
          <MovieList title={"Popular"} movies={movies.addNowPlayingMovies} />
          <MovieList title={"Up Coming"} movies={movies.addUpComingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
