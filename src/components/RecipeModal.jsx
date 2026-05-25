export default function RecipeModal({ recipe, onClose }) {
    if (!recipe) return null;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
        <div className="relative mx-4 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-[40px] border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-2xl">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white hover:bg-white/40 transition"
          >
            ✕
          </button>
  
          <img
            src={recipe.image}
            alt={recipe.title}
            className="mb-4 h-56 w-full rounded-3xl object-cover"
          />
          <h2 className="mb-1 text-2xl font-bold text-white">{recipe.title}</h2>
          <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm text-white backdrop-blur-sm">
            {recipe.category}
          </span>
  
          <div className="mt-6">
            <h3 className="mb-2 text-lg font-semibold text-white">Ingredients</h3>
            <ul className="list-disc pl-5 text-white/90 space-y-1">
              {recipe.ingredients.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
  
          <div className="mt-6">
            <h3 className="mb-2 text-lg font-semibold text-white">Steps</h3>
            <ol className="list-decimal pl-5 text-white/90 space-y-1">
              {recipe.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }