import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = () => {
  return (
    <div className="flex justify-center items-center gap-2 mt-8">

      <button className="w-10 h-10 rounded-lg border hover:bg-gray-100 flex items-center justify-center">
        <ChevronLeft size={18} />
      </button>

      {[1, 2, 3, 4].map((page) => (
        <button
          key={page}
          className={`w-10 h-10 rounded-lg border transition ${
            page === 1
              ? "bg-[#2FD3AE] text-white border-[#2FD3AE]"
              : "hover:bg-gray-100"
          }`}
        >
          {page}
        </button>
      ))}

      <button className="w-10 h-10 rounded-lg border hover:bg-gray-100 flex items-center justify-center">
        <ChevronRight size={18} />
      </button>

    </div>
  );
};

export default Pagination;