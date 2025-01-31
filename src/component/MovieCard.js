import React from "react";
import { CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4 hover:scale-125">
      <img alt="MoviesLogo" src={CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
