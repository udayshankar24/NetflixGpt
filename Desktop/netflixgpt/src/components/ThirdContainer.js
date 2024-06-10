import React from "react";
import { useParams } from "react-router-dom";

import { API_OPTIONS } from "../utils/constants";

import { useEffect } from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const ThirdContainer = () => {
  const movieid = useParams();
  console.log(movieid.movieid);

  const getMovie = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/" + movieid.movieid + "?language=en-US", API_OPTIONS);
    const json = await data.json();
  };
  useEffect(() => {
    getMovie();
  }, []);
  const handleClick = () => {};

  return (
    <div>
      <div className="bg-black justify-end">
        <button className="text-white bg-red-700 rounded-lg p-4 cursor-pointer" onClick={handleClick}>
          HomePage
        </button>
      </div>
      <div className="pt-[30%] bg-black md:pt-0">
        <VideoBackground movieId={movieid.movieid} />
      </div>
    </div>
  );
};

export default ThirdContainer;
