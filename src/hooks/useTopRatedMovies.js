import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_KEY } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_KEY
    );
    const json = await data.json();
    console.log("addTopRatedMovies", json.results);
    dispatch(addTopRatedMovies(json.results));
    // const { title, id, release_date } = json.results;
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
