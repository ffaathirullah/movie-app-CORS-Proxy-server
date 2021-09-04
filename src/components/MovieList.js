import React from "react";

const MovieList = (props) => {
  const { movies } = props;

  return (
    <>
      {movies.map((movie, index) => (
        <div>
          <p>{movie.jobtitle}</p>
        </div>
      ))}
    </>
  );
};
export default MovieList;
