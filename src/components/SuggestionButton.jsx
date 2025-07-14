import { useState } from "react";
import { Lightbulb, X } from "lucide-react";

export default function SuggestionButton({ }) {
    const [showPopup, setShowPopup] = useState(false);
    const [suggestions, setSuggestions] = useState([]);

    const handleSuggest = async () => {
        const userId = 123;
        console.log(`Gọi API: /api/suggestions?userId=${userId}`);

        const response = await new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    {
                        id: 999,
                        name: "Sách luyện thi TOEIC",
                        price: 400000,
                        image: "/books/suggestion.jpg",
                        shortDesc: "Cho người mới bắt đầu",
                        rating: 4.9,
                    },
                    {
                        id: 1000,
                        name: "Từ vựng IELTS nâng cao",
                        price: 650000,
                        image: "/books/suggestion2.jpg",
                        shortDesc: "Từ vựng chuyên sâu",
                        rating: 4.7,
                    },
                ]);
            }, 1000);
        });

        setSuggestions(response);
        setShowPopup(true);
    };

    return (
        <>
            {/* Nút gợi ý nổi */}
            <button
                onClick={handleSuggest}
                className="fixed bottom-6 right-6 w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 transition"
                title="Gợi ý thông minh"
            >
                <Lightbulb size={28} />
            </button>

            {/* Popup gợi ý */}
            {showPopup && (
                <div className="fixed bottom-24 right-6 w-80 bg-white shadow-xl rounded-lg p-4 border z-50">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="font-semibold text-lg">Gợi ý cho bạn</h2>
                        <button onClick={() => setShowPopup(false)}>
                            <X className="text-gray-500 hover:text-black" />
                        </button>
                    </div>
                    <div className="space-y-3 max-h-72 overflow-auto">
                        {suggestions.map((book) => (
                            <div key={book.id} className="flex items-start gap-3">
                                <img
                                    src={book.image}
                                    alt={book.name}
                                    className="w-14 h-20 object-cover rounded"
                                />
                                <div>
                                    <p className="font-medium">{book.name}</p>
                                    <p className="text-sm text-gray-500">{book.shortDesc}</p>
                                    <p className="text-green-600 font-semibold">
                                        {book.price.toLocaleString()}₫
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
