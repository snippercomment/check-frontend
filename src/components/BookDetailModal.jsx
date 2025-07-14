import { useParams } from "react-router-dom";
import books from "../data/mockBooks";

export default function BookDetail() {
    const { id } = useParams();
    const book = books.find((b) => b.id === parseInt(id));

    if (!book) return <p className="text-center mt-10">Không tìm thấy sách.</p>;

    return (
        <div className="max-w-5xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Cột trái: ảnh và thông tin */}
                <div className="flex-1">
                    <img
                        src={book.image}
                        alt={book.name}
                        className="w-full h-80 object-contain rounded bg-white p-4"
                    />

                    <h1 className="text-2xl font-bold mt-4">{book.name}</h1>
                    <p className="text-xl font-semibold text-blue-600 mt-2">
                        Giá: {book.price.toLocaleString()}đ
                    </p>
                </div>

                {/* Cột phải: mô tả chi tiết */}
                <div className="flex-1">
                    <h2 className="text-lg font-semibold mb-2"> Mô tả sản phẩm</h2>
                    <p className="text-gray-700 whitespace-pre-line">{book.longDesc}</p>
                </div>
            </div>
        </div>
    );
}
