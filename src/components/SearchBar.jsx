import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import textbooks from "../data/mockBooks"; // hoặc thay bằng file bạn đã import image

export default function SearchBar({ search, setSearch }) {
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    useEffect(() => {
        if (search.trim() === "") {
            setSuggestions([]);
            return;
        }

        const filtered = textbooks.filter((book) =>
            book.name.toLowerCase().includes(search.toLowerCase())
        );
        setSuggestions(filtered);
    }, [search]);

    return (
        <div className="relative w-full max-w-xl">
            <div className="flex items-center border rounded-md px-3 py-2 gap-2 bg-white">
                <Search className="text-gray-500 w-5 h-5" />
                <input
                    type="text"
                    placeholder="Tìm kiếm sách..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                    className="w-full outline-none"
                />
            </div>

            {showSuggestions && suggestions.length > 0 && (
                <ul className="absolute z-10 mt-1 bg-white border rounded-md w-full shadow-md max-h-60 overflow-y-auto">
                    {suggestions.map((book) => (
                        <li
                            key={book.id}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                            onClick={() => {
                                setSearch(book.name);
                                setShowSuggestions(false);
                            }}
                        >
                            {book.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
