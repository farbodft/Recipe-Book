/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import RecipeModal from "../components/RecipeModal";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const loadFavorites = () => {
      const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
      setFavorites(saved);
    };

    loadFavorites();

    // Optional: Listen for storage changes 
    // (Useful if the user has multiple tabs open or if you want instant updates)
    window.addEventListener("favoritesUpdated", loadFavorites);
    return () => window.removeEventListener("favoritesUpdated", loadFavorites);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black p-6">
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">My Favorite Recipes</h1>
        <p className="text-gray-400">Your curated collection of saved recipes.</p>
      </div>

      {favorites.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {favorites.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onClick={setSelectedRecipe}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-20 text-center">
          <div className="text-6xl mb-4">🍳</div>
          <h2 className="text-xl text-white font-medium">No favorites yet</h2>
          <p className="text-gray-400 mt-2">Start adding some recipes from the home page!</p>
        </div>
      )}

      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
}
