import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import axios from "axios";

function App() {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://mycorsproxy3.herokuapp.com/https://api.indeed.com/ads/apisearch?publisher=7778623931867371&format=json&v=2&co=id&q=front+end&sort=date&q=frontEnd"
      )
      .then((res) => {
        const movies = res.data.results;
        console.log(movies);
        setMovie(movies);
      })
      .catch((error) => {
        console.log("error: " + error);
      });
  }, []);

  return (
    <div className="container-fluid movie-app ">
      <div className="row ">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
