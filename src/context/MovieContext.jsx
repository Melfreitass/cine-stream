import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../services/supabase";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const normalizeId = (id) => Number(id);

  // 🔥 BUSCAR FILMES
  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() {
    setLoading(true);

    const { data, error } = await supabase
      .from("filmes")
      .select("*");

    if (error) {
      console.log("Erro ao buscar filmes:", error);
      setMovies([]);
    } else {
      setMovies(data);
    }

    setLoading(false);
  }

  // ➕ CRIAR FILME
  async function addMovie(movie) {
    const { data, error } = await supabase
      .from("filmes")
      .insert([movie])
      .select();

    if (error) {
      console.log(error);
    } else {
      setMovies((prev) => [...prev, data[0]]);
    }
  }

  // 🔍 BUSCAR POR ID
  function getMovieById(id) {
    return movies.find((m) => m.id === normalizeId(id));
  }

  // ✏️ ATUALIZAR FILME
  async function updateMovie(id, updatedMovie) {
    const { data, error } = await supabase
      .from("filmes")
      .update(updatedMovie)
      .eq("id", normalizeId(id))
      .select();

    if (error) {
      console.log(error);
    } else {
      setMovies((prev) =>
        prev.map((movie) =>
          movie.id === normalizeId(id) ? data[0] : movie
        )
      );
    }
  }

  // 🗑️ DELETAR FILME
  async function deleteMovie(id) {
    const { error } = await supabase
      .from("filmes")
      .delete()
      .eq("id", normalizeId(id));

    if (!error) {
      setMovies((prev) =>
        prev.filter((movie) => movie.id !== normalizeId(id))
      );
    }
  }

  return (
    <MovieContext.Provider
      value={{
        movies,
        search,
        setSearch,
        loading,

        addMovie,
        getMovieById,
        updateMovie,
        deleteMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export function useMovies() {
  return useContext(MovieContext);
}