import { useState } from "react";
import MovieCard from "../components/MovieCard";
import GenreFilter from "../components/GenreFilter";
import { useMovies } from "../context/MovieContext";

export default function Home() {
  const { movies, search } = useMovies();
  const [genre, setGenre] = useState("");

  const genres = [...new Set(movies.map((m) => m.genero))];

  const filteredMovies = movies.filter((movie) => {
    const matchTitle = movie.titulo
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchGenre = genre ? movie.genero === genre : true;

    return matchTitle && matchGenre;
  });

  const featuredMovie = movies[0];

  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <main className="max-w-7xl mx-auto px-6 py-6">

        {/* HERO */}
        {featuredMovie && (
          <section className="relative h-[420px] rounded-3xl overflow-hidden mb-12 border border-slate-800">

            <img
              src={featuredMovie.imagem}
              alt={featuredMovie.titulo}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#020817] via-[#020817]/85 to-transparent" />

            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-lg px-8">

                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded bg-blue-600">
                    LANÇAMENTO
                  </span>

                  <span className="text-red-400 font-bold text-sm">
                    ★ {featuredMovie.nota}
                  </span>
                </div>

                <h1 className="text-4xl font-bold mb-4">
                  {featuredMovie.titulo}
                </h1>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-4">
                  {featuredMovie.sinopse}
                </p>

                <div className="flex gap-3">
                  <button className="bg-white text-black font-semibold px-5 py-2.5 rounded-xl hover:bg-gray-200 transition">
                    ▶ Assistir Agora
                  </button>

                  <button className="bg-slate-800 border border-slate-700 px-5 py-2.5 rounded-xl hover:bg-slate-700 transition">
                    + Minha Lista
                  </button>
                </div>

              </div>
            </div>
          </section>
        )}

        {/* FILTROS */}
        <GenreFilter
          genres={genres}
          selected={genre}
          onChange={setGenre}
        />

        {/* HEADER LISTA */}
        <div className="flex items-center justify-between mt-10 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Filmes em Alta
          </h2>

          <span className="text-slate-400 text-sm">
            {filteredMovies.length} filme(s)
          </span>
        </div>

        {/* GRID */}
        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border border-slate-800 rounded-2xl bg-slate-900/40">
            <p className="text-xl text-slate-300">
              Nenhum filme encontrado
            </p>

            <p className="text-slate-500 mt-2">
              Tente alterar a busca ou o gênero selecionado.
            </p>
          </div>
        )}

      </main>
    </div>
  );
}