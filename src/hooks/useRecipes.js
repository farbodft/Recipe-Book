import { useState } from "react";
import defaultRecipes from "../data/recipes.json";

const STORAGE_KEY = "userRecipes";

export default function useRecipes() {
  const [recipes, setRecipes] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const userRecipes = JSON.parse(stored);
        return [...defaultRecipes, ...userRecipes];
      } catch (e) {
        console.error("Failed to parse user recipes from localStorage", e);
      }
    }
    return defaultRecipes;
  });

  const addRecipe = (newRecipe) => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const userRecipes = stored ? JSON.parse(stored) : [];
    const allRecipes = [...defaultRecipes, ...userRecipes];
    const maxId = allRecipes.reduce((max, r) => Math.max(max, r.id), 0);

    const recipeToSave = { ...newRecipe, id: maxId + 1 };

    setRecipes((prev) => [...prev, recipeToSave]);

    userRecipes.push(recipeToSave);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userRecipes));
  };

  return { recipes, addRecipe };
}