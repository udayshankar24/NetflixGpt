import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpComing } from "../utils/movieSlice";

const useUpComing = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  //const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

  const getUpComing = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", API_OPTIONS);
    const json = await data.json();

    dispatch(addUpComing(json.results));
  };

  useEffect(() => {
    getUpComing();
  }, []);
};

export default useUpComing;
