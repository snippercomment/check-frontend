import { useParams } from "react-router-dom";
import books from "../data/mockBooks";

export default function BookDetail() {
    const { id } = useParams();
    const book = books.find((b) => b.id === parseInt(id));

    if (!book) return <p className="text-center mt-10">Không tìm thấy sách.</p>;

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 flex flex-col lg:flex-row gap-8">
                {/* Cột trái: ảnh và thông tin */}
                <div className="w-full lg:w-1/2 flex flex-col items-center">
                    <div className="bg-gray-50 p-4 rounded-xl shadow-sm w-full">
                        <img
                            src={book.image}
                            alt={book.name}
                            className="w-full h-96 object-contain rounded-xl"
                        />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800 mt-6 text-center">{book.name}</h1>
                    <p className="text-xl font-semibold text-blue-600 mt-2">
                        Giá: {book.price.toLocaleString()}đ
                    </p>
                </div>

                {/* Cột phải: mô tả */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                        Mô tả sản phẩm
                    </h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {book.longDesc}
                    </p>
                </div>
            </div>
        </div>
    );
}
