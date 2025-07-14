import { ChevronDown } from "lucide-react";

export default function FilterBar({ filter, setFilter }) {
    const handleChange = (e) => {
        const value = e.target.value;
        setFilter(value === "" ? null : value);
    };

    return (
        <div className="relative w-40">
            <select
                value={filter || ""}
                onChange={handleChange}
                className="appearance-none w-full px-3 py-1.5 pr-8 rounded border border-gray-300 text-sm bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
                <option value="">Lọc theo giá</option>
                <option value="<500">Dưới 500K</option>
                <option value="500-1000">500K – 1 triệu</option>
                <option value=">1000">Trên 1 triệu</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
        </div>
    );
}
