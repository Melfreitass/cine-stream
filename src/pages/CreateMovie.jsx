import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMovies } from "../context/MovieContext";

export default function CreateMovie() {
  const navigate = useNavigate();
  const { addMovie } = useMovies();

  const [form, setForm] = useState({
    titulo: "",
    genero: "",
    ano: "",
    nota: "",
    imagem: "",
    sinopse: "",
    duracao: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addMovie(form);
    navigate("/");
  }

  return (
    <div className="min-h-[calc(100vh-72px)] bg-[#020817] flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-slate-900/90 border border-slate-800 rounded-3xl p-8 shadow-2xl"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            Novo Conteúdo
          </h1>

          <p className="text-slate-400 mt-2">
            Preencha os detalhes para catalogar um novo filme no sistema.
          </p>
        </div>

        <div className="space-y-5">
          {/* Título */}
          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Título do Filme
            </label>

            <input
              name="titulo"
              value={form.titulo}
              onChange={handleChange}
              placeholder="Ex: Interestellar"
              className="w-full h-12 px-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-red-500"
            />
          </div>

          {/* Linha 1 */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Gênero
              </label>

              <input
                name="genero"
                value={form.genero}
                onChange={handleChange}
                placeholder="Ação"
                className="w-full h-12 px-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-red-500"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Ano de Lançamento
              </label>

              <input
                name="ano"
                value={form.ano}
                onChange={handleChange}
                placeholder="2024"
                className="w-full h-12 px-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-red-500"
              />
            </div>
          </div>

          {/* Linha 2 */}
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Duração (min)
              </label>

              <input
                name="duracao"
                value={form.duracao}
                onChange={handleChange}
                placeholder="120"
                className="w-full h-12 px-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-red-500"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Nota (0-10)
              </label>

              <input
                name="nota"
                value={form.nota}
                onChange={handleChange}
                placeholder="8.5"
                className="w-full h-12 px-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-red-500"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-2">
                URL do Poster
              </label>

              <input
                name="imagem"
                value={form.imagem}
                onChange={handleChange}
                placeholder="https://..."
                className="w-full h-12 px-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-red-500"
              />
            </div>
          </div>

          {/* Sinopse */}
          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Sinopse
            </label>

            <textarea
              name="sinopse"
              value={form.sinopse}
              onChange={handleChange}
              rows={5}
              placeholder="Descreva brevemente a história do filme..."
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none resize-none focus:border-red-500"
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="
              w-full
              h-12
              mt-4
              rounded-xl
              bg-red-600
              hover:bg-red-500
              transition-all
              duration-300
              font-semibold
              text-white
              shadow-lg
              shadow-red-600/20
            "
          >
            🎬 Cadastrar Filme
          </button>
        </div>
      </form>
    </div>
  );
}