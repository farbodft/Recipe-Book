import { Link, NavLink } from "react-router-dom";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

function getFavoritesCount() {
  try {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    return Array.isArray(favorites) ? favorites.length : 0;
  } catch {
    return 0;
  }
}

export default function Navbar() {
  const [favCount, setFavCount] = useState(getFavoritesCount());

  useEffect(() => {
    const update = () => setFavCount(getFavoritesCount());

    window.addEventListener("favoritesUpdated", update);

    window.addEventListener("storage", update);

    return () => {
      window.removeEventListener("favoritesUpdated", update);
      window.removeEventListener("storage", update);
    };
  }, []);

  const linkClass = ({ isActive }) =>
    `relative px-3 py-2 rounded-full transition-colors ${
      isActive
        ? "text-white bg-white/10 border border-white/15"
        : "text-white/80 hover:text-white hover:bg-white/5"
    }`;

  return (
    <header className="sticky top-0 z-50">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 backdrop-blur-md px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight text-white">
              Recipe Book
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <NavLink to="/" className={linkClass} end>
              Home
            </NavLink>

            <NavLink to="/favorites" className={linkClass}>
              <span className="inline-flex items-center gap-2">
                <Heart size={18} className="text-red-400" />
                Favorites

                {favCount > 0 && (
                  <span className="ml-1 inline-flex min-w-6 justify-center rounded-full bg-red-500/90 px-2 py-0.5 text-xs font-semibold text-white">
                    {favCount}
                  </span>
                )}
              </span>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
