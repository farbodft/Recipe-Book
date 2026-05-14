export default function RecipeCard({ recipe, onClick }) {
    return (
      <div
        onClick={() => onClick(recipe)}
        className="flex flex-col cursor-pointer rounded-[40px] border border-white/30 bg-white/10 backdrop-blur-lg shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.3)] hover:-translate-y-2 transition-all duration-300 overflow-hidden w-full h-[400px] mx-auto"
      >
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-3/5 w-full object-cover"
        />
        <div className="p-5 flex flex-col justify-center items-center flex-grow text-center">
          <h3 className="text-xl font-bold text-white drop-shadow-md line-clamp-2">
            {recipe.title}
          </h3>
          <span className="inline-block mt-3 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md border border-white/20">
            {recipe.category}
          </span>
        </div>
      </div>
    );
  }
  