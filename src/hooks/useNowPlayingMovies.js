import { useEffect } from "react";
import { API_KEY } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_KEY
    );
    const json = await data.json();
    console.log("json", json.results);
    dispatch(addNowPlayingMovies(json.results));
    // const { title, id, release_date } = json.results;
  };
  useEffect(() => {
    getNowPlayingMovies();
    console.log("console");
  }, []);
};

export default useNowPlayingMovies;
