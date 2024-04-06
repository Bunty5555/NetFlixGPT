import React, { useEffect, useState } from "react";
import { API_KEY } from "../utils/constants";
// import { useDispatch, useSelector } from "react-redux";
// import { addTrailerVideo } from "../utils/movieSlice";

const BackGroundVideo = ({ moviesId }) => {
  // const dispatch = useDispatch();
  // const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  // console.log("trailerVideo", trailerVideo);
  const [trailerId, setTrailerId] = useState(null);
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        moviesId +
        "/videos?language=en-US",
      API_KEY
    );
    const json = await data.json();
    console.log("json", json);
    const filterData = json.results?.filter(
      (video) => video.type === "Trailer"
    );
    console.log("filterData", filterData);
    const trailer = filterData[1];
    console.log("trailer", trailer);
    // dispatch(addTrailerVideo(trailer));
    setTrailerId(trailer.key);
  };
  useEffect(() => {
    getMovieVideo();
  }, []);

  return (
    <div className="w-[100%]">
      <iframe
        className="w-[100%] aspect-video"
        src={
          "https://www.youtube.com/embed/" + trailerId + "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default BackGroundVideo;
