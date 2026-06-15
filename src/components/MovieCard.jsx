import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} className="group block">
      <div
        className="
          relative
          overflow-hidden
          rounded-2xl
          bg-slate-900
          border
          border-slate-800
          shadow-md
          transition-all
          duration-300
          hover:scale-[1.02]
          hover:border-red-500/30
          hover:shadow-lg
          hover:shadow-black/40
        "
      >
        {/* Poster */}
        <div className="relative aspect-[2/3] overflow-hidden">
          <img
            src={movie.imagem}
            alt={movie.titulo}
            className="
              w-full
              h-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-110
            "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          {/* Nota */}
          <div
            className="
              absolute
              top-3
              right-3
              px-2
              py-1
              rounded-lg
              bg-black/80
              backdrop-blur-sm
              text-yellow-400
              text-xs
              font-semibold
              border
              border-yellow-500/30
            "
          >
            ⭐ {movie.nota}
          </div>
        </div>

        {/* Conteúdo */}
        <div className="p-4">
          <h2
            className="
              text-white
              font-semibold
              text-base
              md:text-lg
              line-clamp-2
              min-h-[48px]
            "
          >
            {movie.titulo}
          </h2>

          <div className="mt-3 flex items-center justify-between">
            <span
              className="
                px-3
                py-1
                rounded-full
                text-xs
                font-medium
                bg-red-500/10
                text-red-400
                border
                border-red-500/20
                transition
                hover:bg-red-500/20
              "
            >
              {movie.genero}
            </span>

            <span className="text-slate-500 text-xs">
              {movie.ano}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}