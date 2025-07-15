import { Heart } from "lucide-react";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookCard({ book }) {
    const [isFavorited, setIsFavorited] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const current = JSON.parse(localStorage.getItem("favorites") || "[]");
        setIsFavorited(current.some((b) => b.id === book.id));
    }, [book.id]);

    const toggleFavorite = (e) => {
        e.stopPropagation();
        const current = JSON.parse(localStorage.getItem("favorites") || "[]");
        const exists = current.find((b) => b.id === book.id);

        if (exists) {
            const updated = current.filter((b) => b.id !== book.id);
            localStorage.setItem("favorites", JSON.stringify(updated));
            setIsFavorited(false);
            toast("Đã xóa khỏi danh sách yêu thích", {
                style: {
                    border: "1px solid #FEE2E2",
                    padding: "10px",
                    color: "#dc2626",
                },
            });
        } else {
            localStorage.setItem("favorites", JSON.stringify([...current, book]));
            setIsFavorited(true);
            toast.success("Đã thêm vào danh sách yêu thích");
        }
    };

    const handleCardClick = () => {
        navigate(`/books/${book.id}`);
    };

    return (
        <div
            onClick={handleCardClick}
            className="group border rounded-2xl bg-white shadow hover:shadow-lg transition cursor-pointer overflow-hidden flex flex-col"
        >
            {/* Ảnh sách */}
            <div className="relative bg-white">
                <img
                    src={book.image}
                    alt={book.name}
                    className="w-full h-52 object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                />
                <button
                    onClick={toggleFavorite}
                    className={`absolute top-2 right-2 p-2 rounded-full shadow-sm ${isFavorited ? "bg-pink-100 text-pink-600" : "bg-gray-100 text-gray-400"
                        } hover:bg-pink-200 hover:text-pink-700 transition`}
                >
                    <Heart className="w-5 h-5 fill-current" />
                </button>
            </div>

            {/* Nội dung */}
            <div className="p-4 flex flex-col flex-1">
                <h2 className="font-semibold text-base text-gray-800 mb-1 line-clamp-2">{book.name}</h2>
                <p className="text-sm text-gray-600 line-clamp-2">{book.shortDesc}</p>
                <div className="mt-auto">
                    <p className="text-blue-600 font-bold mt-2">
                        {book.price.toLocaleString()}đ
                    </p>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleCardClick();
                        }}
                        className="mt-3 w-full text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition cursor-pointer"
                    >
                        Xem chi tiết
                    </button>
                </div>
            </div>
        </div>
    );
}
