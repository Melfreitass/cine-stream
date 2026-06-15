export default function GenreFilter({ genres, selected, onChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={() => onChange("")}
        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
          selected === ""
            ? "bg-red-600 border-red-600 text-white shadow-lg shadow-red-600/20"
            : "bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600"
        }`}
      >
        Todos
      </button>

      {genres.map((g) => (
        <button
          key={g}
          onClick={() => onChange(g)}
          className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
            selected === g
              ? "bg-red-600 border-red-600 text-white shadow-lg shadow-red-600/20"
              : "bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600"
          }`}
        >
          {g}
        </button>
      ))}
    </div>
  );
}