import { useState } from "react";
import { moviesMock } from "./moviesMock";

export function useMovies() {
  const [movies, setMovies] = useState(moviesMock);

  function addMovie(newMovie) {
    setMovies((prev) => [
      ...prev,
      { ...newMovie, id: Date.now() },
    ]);
  }

  return {
    movies,
    addMovie,
  };
}