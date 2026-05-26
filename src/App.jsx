import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <main className="bg-black min-h-screen text-white p-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<HomePage />} /> 
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;