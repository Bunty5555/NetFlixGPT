import { useEffect } from "react";
import { API_KEY } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_KEY
    );
    const json = await data.json();
    console.log("json", json.results);
    dispatch(addPopularMovies(json.results));
    // const { title, id, release_date } = json.results;
  };
  useEffect(() => {
    getPopularMovies();
    console.log("console");
  }, []);
};

export default usePopularMovies;
