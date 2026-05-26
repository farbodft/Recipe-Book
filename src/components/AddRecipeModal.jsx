import { useState } from "react";

const CATEGORIES = [
  "Iranian",
  "Italian",
  "Japanese",
  "Breakfast",
  "Salad",
  "Beverage",
  "Other",
];

export default function AddRecipeModal({ onClose, onSave }) {
  const [title, setTitle] = useState("");
  const [preview, setPreview] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [ingredients, setIngredients] = useState([""]);
  const [steps, setSteps] = useState([""]);
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleAddIngredient = () => setIngredients([...ingredients, ""]);
  const handleRemoveIngredient = (i) => {
    const updated = ingredients.filter((_, idx) => idx !== i);
    setIngredients(updated.length ? updated : [""]);
  };
  const handleIngredientChange = (i, value) => {
    const updated = [...ingredients];
    updated[i] = value;
    setIngredients(updated);
  };

  const handleAddStep = () => setSteps([...steps, ""]);
  const handleRemoveStep = (i) => {
    const updated = steps.filter((_, idx) => idx !== i);
    setSteps(updated.length ? updated : [""]);
  };
  const handleStepChange = (i, value) => {
    const updated = [...steps];
    updated[i] = value;
    setSteps(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!title.trim()) {
      setError("Title is required.");
      return;
    }
    if (ingredients.some((ing) => !ing.trim())) {
      setError("All ingredients must be filled.");
      return;
    }
    if (steps.some((step) => !step.trim())) {
      setError("All steps must be filled.");
      return;
    }

    const imageUrl = preview || "/images/placeholder.jpg";

    const newRecipe = {
      title: title.trim(),
      image: imageUrl,
      category,
      ingredients: ingredients.map((i) => i.trim()),
      steps: steps.map((s) => s.trim()),
    };

    onSave(newRecipe);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative mx-4 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[40px] border border-white/20 bg-gray-900/80 p-6 backdrop-blur-xl shadow-2xl text-white">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white hover:bg-white/40 transition"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">Add New Recipe</h2>

        {error && (
          <div className="mb-4 rounded-xl bg-red-500/20 p-3 text-red-200 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Title *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="e.g., Margherita Pizza"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full text-sm text-white/70 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-500"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-3 h-32 w-full object-cover rounded-xl"
              />
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Ingredients *
            </label>
            {ingredients.map((ing, i) => (
              <div key={i} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={ing}
                  onChange={(e) => handleIngredientChange(i, e.target.value)}
                  className="flex-1 rounded-xl bg-white/10 border border-white/20 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="e.g., 2 cups flour"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveIngredient(i)}
                  className="px-3 py-2 rounded-xl bg-red-500/30 hover:bg-red-500/50 transition"
                >
                  ✕
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddIngredient}
              className="text-sm text-blue-300 hover:text-blue-100 mt-1"
            >
              + Add ingredient
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Steps *</label>
            {steps.map((step, i) => (
              <div key={i} className="flex gap-2 mb-2">
                <textarea
                  value={step}
                  onChange={(e) => handleStepChange(i, e.target.value)}
                  className="flex-1 rounded-xl bg-white/10 border border-white/20 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  rows={2}
                  placeholder={`Step ${i + 1}`}
                />
                <button
                  type="button"
                  onClick={() => handleRemoveStep(i)}
                  className="px-3 py-2 rounded-xl bg-red-500/30 hover:bg-red-500/50 transition self-start"
                >
                  ✕
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddStep}
              className="text-sm text-blue-300 hover:text-blue-100 mt-1"
            >
              + Add step
            </button>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 hover:bg-blue-500 py-3 font-bold transition"
          >
            Save Recipe
          </button>
        </form>
      </div>
    </div>
  );
}