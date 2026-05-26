import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

export default function RecipeCard({ recipe, onClick }) {
    const [isFavorite, setIsFavorite] = useState(() => {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      return favorites.some((fav) => fav.id == recipe.id);
    });

    useEffect(() => {
      const updateStatus = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setIsFavorite(favorites.some((fav) => fav.id === rrecipe.id));
      };

      window.addEventListener('favoriteUpdated', updateStatus);
      return () => window.removeEventListener('favoritesUpdated', updateStatus);
    }, [recipe.id]);

    const toggleFavorite = (e) => {
      e.stopPropagation();

      let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      const currentlyFav = favorites.some((fav) => fav.id === recipe.id);

      if (currentlyFav) {
        favorites = favorites.filter((fav) => fav.id !== recipe.id);
      } else {
        favorites.push(recipe)
      }

      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(!isFavorite);

      window.dispatchEvent(new Event('favoritesUpdated'));
    }
    return (
      <div
        onClick={() => onClick(recipe)}
        className="flex flex-col cursor-pointer rounded-[40px] border border-white/30 bg-white/10 backdrop-blur-lg shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.3)] hover:-translate-y-2 transition-all duration-300 overflow-hidden w-full h-[400px] mx-auto"
      >
        <button
          onClick={toggleFavorite}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 backdrop-blur-md border border-white/20 hover:scale-110 transition-transform active:scale-95"
        >
          <Heart
            size={24}
            className={`transition-colors duration-300 ${
              isFavorite ? 'fill-red-500 color-red-500' : 'text-white'
            }`}
            fill={isFavorite ? 'currentColor' : 'none'}
          />
        </button>
        <img
          src={import.meta.env.BASE_URL + 'images/' + recipe.image}
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
  