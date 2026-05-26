import { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import RecipeModal from "../components/RecipeModal";
import AddRecipeCard from "../components/AddRecipeCard";
import AddRecipeModal from "../components/AddRecipeModal";
import useRecipes from "../hooks/useRecipes";

export default function HomePage() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const { recipes, addRecipe } = useRecipes();

  return (
    <div className="min-h-screen bg-linear-to-br from-[#0a0f1f] via-[#1a1f2e] to-[#0d0d0d] p-6">
      <h1 className="mb-8 text-center text-4xl font-extrabold text-white drop-shadow-lg">
        📖 Recipe Book
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onClick={setSelectedRecipe}
          />
        ))}

        <AddRecipeCard onClick={() => setShowAddModal(true)} />
      </div>

      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}

      {showAddModal && (
        <AddRecipeModal
          onClose={() => setShowAddModal(false)}
          onSave={addRecipe}
        />
      )}
    </div>
  );
}