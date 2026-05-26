export default function AddRecipeCard({ onClick }) {
    return (
      <div
        onClick={onClick}
        className="cursor-pointer rounded-[40px] border-2 border-dashed border-white/30 bg-white/5 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center h-full min-h-70 w-full max-w-sm mx-auto"
      >
        <span className="text-5xl text-white/60 font-light">+</span>
        <p className="mt-3 text-white/60 text-lg font-medium">Add Recipe</p>
      </div>
    );
  }