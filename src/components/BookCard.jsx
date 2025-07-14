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
        e.stopPropagation(); // Ngăn sự kiện lan lên thẻ div chính
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
        <div className="border rounded-lg shadow-sm hover:shadow-md transition bg-white">
            {/* Ảnh sách */}
            <img
                src={book.image}
                alt={book.name}
                onClick={handleCardClick}
                className="w-full h-52 object-contain rounded-t p-2 bg-white cursor-pointer"
            />

            {/* Nội dung */}
            <div className="px-3 pb-3">
                <h2 className="font-semibold mt-1 text-base">{book.name}</h2>
                <p className="text-sm text-gray-600 line-clamp-2">{book.shortDesc}</p>
                <p className="text-blue-600 font-bold mt-1">
                    {book.price.toLocaleString()}đ
                </p>

                {/* Nút Xem chi tiết + Yêu thích bên phải */}
                <div className="flex justify-end gap-2 mt-2">
                    <button
                        onClick={handleCardClick}
                        className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded cursor-pointer"
                    >
                        Xem chi tiết
                    </button>
                    <button
                        onClick={toggleFavorite}
                        className={`p-1 rounded hover:bg-pink-100 cursor-pointer ${isFavorited ? "text-pink-600" : "text-gray-400"
                            }`}
                    >
                        <Heart className="w-5 h-5 fill-current" />
                    </button>
                </div>
            </div>
        </div>
    );
}
