import { useEffect, useState } from "react";
import { Lightbulb, X } from "lucide-react";
import textbooks from "../data/mockBooks";
import { useNavigate } from "react-router-dom";

export default function SuggestionPopup() {
    const [show, setShow] = useState(true);
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const shuffled = [...textbooks].sort(() => 0.5 - Math.random());
        setSuggestions(shuffled.slice(0, 2));
    }, []);

    return (
        <>
            {/* Popup gợi ý */}
            {show && suggestions.length > 0 && (
                <div className="fixed bottom-24 right-6 w-80 bg-white rounded-xl shadow-2xl p-4 border border-gray-200 z-50 animate-fade-in">
                    <div className="flex justify-between items-center mb-3">
                        <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-800">
                            <Lightbulb size={20} className="text-yellow-500" /> Gợi ý cho bạn
                        </h2>
                        <button onClick={() => setShow(false)} title="Đóng">
                            <X className="text-gray-400 hover:text-black transition" />
                        </button>
                    </div>
                    <div className="space-y-4 max-h-72 overflow-auto">
                        {suggestions.map((book) => (
                            <div
                                key={book.id}
                                onClick={() => navigate(`/books/${book.id}`)}
                                className="flex gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition"
                            >
                                <img
                                    src={book.image}
                                    alt={book.name}
                                    className="w-14 h-20 object-cover rounded-md shadow-sm"
                                />
                                <div className="flex flex-col justify-between">
                                    <p className="font-medium text-gray-800 line-clamp-2">{book.name}</p>
                                    <p className="text-sm text-gray-500 line-clamp-2">{book.shortDesc}</p>
                                    <p className="text-green-600 font-semibold text-sm mt-1">
                                        {book.price.toLocaleString()}₫
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Nút bật lại */}
            {!show && (
                <button
                    onClick={() => setShow(true)}
                    className="fixed bottom-6 right-6 w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-green-700 transition"
                    title="Xem lại gợi ý"
                >
                    <Lightbulb size={28} />
                </button>
            )}
        </>
    );
}
