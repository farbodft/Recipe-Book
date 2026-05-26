import { useState } from "react";
import defaultRecipes from "../data/recipes.json";

export default function useRecipes() {
  const [recipes, setRecipes] = useState(defaultRecipes);

  const addRecipe = (newRecipe) => {
    const maxId = recipes.reduce((max, r) => Math.max(max, r.id), 0);
    const recipeToSave = { ...newRecipe, id: maxId + 1 };
    setRecipes((prev) => [...prev, recipeToSave]);
  };

  return { recipes, addRecipe };
}