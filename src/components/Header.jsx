import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMovies } from "../context/MovieContext";

export default function Header() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const { search, setSearch } = useMovies();

  function handleSearch(e) {
    const value = e.target.value;
    setQuery(value);
    setSearch(value);
  }

  return (
    <header className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-red-500"
        >
          CineStream
        </Link>

        {/* Busca */}
        <div className="flex-1 flex justify-center px-8">
          <input
            value={query}
            onChange={handleSearch}
            placeholder="Pesquisar filmes..."
            className="
              w-full
              max-w-xl
              h-11
              px-5
              rounded-full
              bg-slate-950
              border
              border-slate-700
              text-white
              placeholder:text-slate-500
              outline-none
              focus:border-red-500
              transition
            "
          />
        </div>

        {/* Ações */}
        <div className="flex items-center gap-4">

          <button
            onClick={() => navigate("/create")}
            className="
              bg-red-600
              hover:bg-red-500
              transition
              px-5
              h-11
              rounded-xl
              font-medium
              text-white
            "
          >
            Cadastrar Filme
          </button>

          <button
            className="
              w-10
              h-10
              rounded-full
              flex
              items-center
              justify-center
              text-slate-400
              hover:text-white
              hover:bg-slate-800
              transition
            "
          >
            🔔
          </button>

          <div
            className="
              w-10
              h-10
              rounded-full
              bg-gradient-to-br
              from-red-500
              to-red-700
              border
              border-slate-700
            "
          />
        </div>

      </div>
    </header>
  );
}