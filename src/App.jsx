import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import BookDetail from "./components/BookDetailModal";

export default function App() {
  const location = useLocation();

  return (
    <div className="bg-blue-50 min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-blue-600 font-bold text-2xl tracking-wide">
            Trang Sách
          </Link>

          <Link to="/favorites">
            <button className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-medium px-5 py-2 rounded-xl shadow transition duration-300">
              Yêu thích
            </button>
          </Link>
        </div>
      </nav>

      {/* Nội dung trang */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-6">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/books/:id" element={<BookDetail />} />
        </Routes>
      </main>

      {/* Footer đẹp UI/UX */}
      <footer className="bg-gradient-to-r from-blue-100 to-blue-200 border-t border-blue-300 mt-6 shadow-inner">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} <span className="font-semibold text-blue-700">Trang Sách</span>. All rights reserved.</p>

          <div className="flex gap-4 mt-2 md:mt-0">
            <a
              href="https://github.com/snippercomment/check-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 hover:underline transition"
            >
              GitHub
            </a>

          </div>
        </div>
      </footer>
    </div>
  );
}
