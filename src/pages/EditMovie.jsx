import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMovies } from "../context/MovieContext";

export default function EditMovie() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { getMovieById, updateMovie } = useMovies();

  const movie = getMovieById(id);

  const [form, setForm] = useState({
    titulo: "",
    genero: "",
    ano: "",
    nota: "",
    imagem: "",
    sinopse: "",
    duracao: "",
  });

  useEffect(() => {
    if (movie) {
      setForm(movie);
    }
  }, [movie]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    updateMovie(id, form);

    navigate(`/movie/${id}`);
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-[#020817] flex items-center justify-center text-white">
        <h1 className="text-2xl font-bold">
          Filme não encontrado
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-72px)] bg-[#020817] px-4 py-10">
      <div className="max-w-6xl mx-auto">

        <div className="grid lg:grid-cols-[1fr_320px] gap-8">

          {/* FORMULÁRIO */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-white">
                Editar Filme
              </h1>

              <p className="text-slate-400 mt-2">
                Atualize as informações do filme.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="block text-sm text-slate-300 mb-2">
                  Título
                </label>

                <input
                  name="titulo"
                  value={form.titulo}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-red-500"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-300 mb-2">
                    Gênero
                  </label>

                  <input
                    name="genero"
                    value={form.genero}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-2">
                    Ano
                  </label>

                  <input
                    name="ano"
                    value={form.ano}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-red-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-slate-300 mb-2">
                    Duração
                  </label>

                  <input
                    name="duracao"
                    value={form.duracao}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-2">
                    Nota
                  </label>

                  <input
                    name="nota"
                    value={form.nota}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-2">
                    Poster
                  </label>

                  <input
                    name="imagem"
                    value={form.imagem}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-red-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-2">
                  Sinopse
                </label>

                <textarea
                  name="sinopse"
                  value={form.sinopse}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none resize-none focus:border-red-500"
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 rounded-xl bg-red-600 hover:bg-red-500 transition font-semibold text-white"
              >
                Salvar Alterações
              </button>
            </form>
          </div>

          {/* PREVIEW */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 h-fit">
            <h2 className="text-lg font-semibold text-white mb-4">
              Prévia
            </h2>

            <img
              src={form.imagem}
              alt={form.titulo}
              className="w-full aspect-[2/3] object-cover rounded-2xl"
            />

            <h3 className="text-white font-bold text-lg mt-4">
              {form.titulo || "Título do Filme"}
            </h3>

            <p className="text-slate-400 text-sm mt-1">
              {form.genero || "Gênero"}
            </p>

            <div className="mt-3 text-yellow-400 font-semibold">
              ⭐ {form.nota || "0"}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}