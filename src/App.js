import React, { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import axios from "axios";

function App() {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.omdbapi.com/?apikey=faf7e5bb&s=superman")
      .then((res) => {
        const movies = res.data.Search;
        setMovie(movies);
      })
      .catch((error) => {
        console.log("error: " + error);
      });
  }, []);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
