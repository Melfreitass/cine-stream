import { useParams, Link, useNavigate } from "react-router-dom";
import { useMovies } from "../context/MovieContext";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { getMovieById, deleteMovie } = useMovies();

  const movie = getMovieById(id);

  function handleDelete() {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir este filme?"
    );

    if (confirmDelete) {
      deleteMovie(movie.id);
      navigate("/");
    }
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-[#020817] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            Filme não encontrado
          </h1>

          <Link
            to="/"
            className="text-red-500 hover:text-red-400"
          >
            ← Voltar para Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-72px)] bg-[#020817] text-white px-6 py-6">
      <div className="max-w-6xl mx-auto">

        <Link
          to="/"
          className="inline-flex items-center text-slate-400 hover:text-white transition mb-6"
        >
          ← Voltar
        </Link>

        <div className="grid lg:grid-cols-[300px_1fr] gap-8">

          {/* Poster */}
          <div>
            <img
              src={movie.imagem}
              alt={movie.titulo}
              className="
                w-full
                rounded-3xl
                object-cover
                shadow-xl
                border
                border-slate-800
              "
            />
          </div>

          {/* Informações */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <div className="flex flex-wrap items-center gap-3 mb-5">

              <span className="px-4 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-sm">
                {movie.genero}
              </span>

              <span className="px-4 py-1 rounded-full bg-slate-800 text-slate-300 text-sm">
                {movie.ano}
              </span>

              <span className="px-4 py-1 rounded-full bg-slate-800 text-slate-300 text-sm">
                {movie.duracao} min
              </span>

            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {movie.titulo}
            </h1>

            <div className="flex items-center gap-2 mb-6">
              <span className="text-yellow-400 text-xl">
                ⭐
              </span>

              <span className="text-xl font-bold text-yellow-400">
                {movie.nota}
              </span>

              <span className="text-slate-500">
                /10
              </span>
            </div>

            {/* Sinopse */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-5 mb-6">
              <h2 className="text-lg font-semibold mb-3">
                Sinopse
              </h2>

              <p className="text-slate-300 leading-relaxed">
                {movie.sinopse}
              </p>
            </div>

            {/* Botões */}
            <div className="flex flex-wrap gap-3">

              <button
                className="
                  bg-red-600
                  hover:bg-red-500
                  transition
                  px-5
                  py-2.5
                  rounded-xl
                  font-semibold
                "
              >
                ▶ Assistir Agora
              </button>

              <Link
                to={`/edit/${movie.id}`}
                className="
                  bg-slate-800
                  hover:bg-slate-700
                  transition
                  px-5
                  py-2.5
                  rounded-xl
                  font-medium
                "
              >
                ✏️ Editar
              </Link>

              <button
                onClick={handleDelete}
                className="
                  border
                  border-red-500
                  text-red-400
                  hover:bg-red-600
                  hover:text-white
                  transition
                  px-5
                  py-2.5
                  rounded-xl
                  font-medium
                "
              >
                🗑 Excluir
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}