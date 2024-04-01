import React from "react";
import BackGroundVideo from "./BackGroundVideo";
import TitleOfVideo from "./TitleOfVideo";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  //
  if (movies == null) return;
  const mainMovie = movies[0];
  console.log(mainMovie);
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <TitleOfVideo title={original_title} overview={overview} />
      <BackGroundVideo moviesId={id} />
    </div>
  );
};

export default MainContainer;
