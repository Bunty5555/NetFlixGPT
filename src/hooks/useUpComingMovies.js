import { useEffect } from "react";
import { API_KEY } from "../utils/constants";
import { addUpComingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_KEY
    );
    const json = await data.json();
    console.log("json", json.results);
    dispatch(addUpComingMovies(json.results));
    // const { title, id, release_date } = json.results;
  };
  useEffect(() => {
    getUpComingMovies();
    console.log("console");
  }, []);
};

export default useUpComingMovies;
