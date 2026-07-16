import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-center mt-12 gap-2 mb-[30px]">

      {[1, 2, 3, 4].map((page) => (
        <button
          key={page}
          className={`w-10 h-10 rounded border transition ${
            page === 1
              ? "bg-[#2FD3AE] text-white border-[#2FD3AE]"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          {page}
        </button>
      ))}

      <button className="w-10 h-10 rounded border hover:bg-gray-100">
        →
      </button>

    </div>
  );
};

export default Pagination;