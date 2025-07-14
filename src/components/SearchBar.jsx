import { Search } from "lucide-react";

export default function SearchBar({ search, setSearch }) {
    return (
        <div className="flex items-center border rounded-md w-full max-w-xl mx-auto px-3 py-2 gap-2">
            <Search className="text-gray-500 w-5 h-5" />
            <input
                type="text"
                placeholder="Tìm kiếm sách..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full outline-none"
            />
        </div>
    );
}
