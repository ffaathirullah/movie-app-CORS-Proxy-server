import React from "react";

const MovieList = (props) => {
  const { movies } = props;
  console.log(movies);
  return (
    <>
      {movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m-3">
          <img src={movie.Poster} alt="movie"></img>
        </div>
      ))}
    </>
  );
};
export default MovieList;
