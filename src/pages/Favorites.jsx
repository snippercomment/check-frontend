import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";
import BookDetailModal from "../components/BookDetailModal";

export default function Favorites() {
    const [favorites, setFavorites] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("favorites") || "[]");
        setFavorites(stored);
    }, []);

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Danh sách yêu thích</h1>
            {favorites.length === 0 ? (
                <p>Bạn chưa thêm sách nào vào yêu thích.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {favorites.map((book) => (
                        <BookCard key={book.id} book={book} onClick={() => setSelectedBook(book)} />
                    ))}
                </div>
            )}
            {selectedBook && (
                <BookDetailModal book={selectedBook} onClose={() => setSelectedBook(null)} />
            )}
        </div>
    );
}
