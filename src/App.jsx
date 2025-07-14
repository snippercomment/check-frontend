import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import BookDetail from "./components/BookDetailModal";

export default function App() {
  return (
    <div className="p-4 bg-blue-100 min-h-screen">
      <nav className="flex justify-between mb-4">
        <Link to="/" className="text-blue-600 font-bold text-xl">
          Trang Sách
        </Link>

        <Link to="/favorites">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow cursor-pointer">
            Yêu thích
          </button>
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/books/:id" element={<BookDetail />} />
      </Routes>
    </div>
  );
}
