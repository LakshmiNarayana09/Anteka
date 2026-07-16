import React from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

const Category = ({ categories = [] }) => {
  return (
    <div className="w-full bg-white rounded-md border border-gray-200 overflow-hidden">
      
      <div className="px-6 py-5 border-b">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-700">
          Categories
        </h2>
      </div>

      
      <div>
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <button
              key={index}
              className="w-full flex items-center gap-3 px-6 py-4 border-b last:border-b-0 hover:bg-gray-50 transition"
            >
              <ChevronRight
                size={14}
                className="text-gray-400 flex-shrink-0"
              />

              <span className="text-left text-[15px] text-gray-700">
                {category}
              </span>
            </button>
          ))
        ) : (
          <div className="px-6 py-8 text-center text-gray-500 text-sm">
            Categories will be available soon.
          </div>
        )}
      </div>

      
      <button className="w-full bg-[#2FD3AE] hover:bg-[#28c09e] text-white font-semibold uppercase tracking-wide text-sm py-4 flex items-center justify-center gap-2 transition">
        <ChevronDown size={16} />
        Show All Categories
      </button>
    </div>
  );
};

export default Category;