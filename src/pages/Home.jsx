import { useState } from "react";
import booksData from "../data/mockBooks";
import BookCard from "../components/BookCard";
import BookDetailModal from "../components/BookDetailModal";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import SuggestionButton from "../components/SuggestionButton";

export default function Home() {
    const [books, setBooks] = useState(booksData);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState(null);
    const [selectedBook, setSelectedBook] = useState(null);

    const filteredBooks = books.filter((book) => {
        const matchesSearch = book.name.toLowerCase().includes(search.toLowerCase());
        const matchesFilter =
            !filter ||
            (filter === "<500" && book.price < 500000) ||
            (filter === "500-1000" && book.price >= 500000 && book.price <= 1000000) ||
            (filter === ">1000" && book.price > 1000000);
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="w-full px-4">
            <div className="w-full flex flex-col items-center gap-3 mb-4">
                {/* Hàng tìm kiếm + lọc ngang hàng */}
                <div className="w-full max-w-4xl flex flex-row items-center justify-between gap-4">
                    <SearchBar search={search} setSearch={setSearch} />
                    <FilterBar filter={filter} setFilter={setFilter} />
                </div>

                {/* Gợi ý luôn hiển thị */}
                <SuggestionButton setBooks={setBooks} />
            </div>


            {/* Danh sách sách */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {filteredBooks.map((book) => (
                    <BookCard key={book.id} book={book} onClick={() => setSelectedBook(book)} />
                ))}
            </div>

            {/* Modal chi tiết sách */}
            {selectedBook && (
                <BookDetailModal book={selectedBook} onClose={() => setSelectedBook(null)} />
            )}
        </div>
    );
}
