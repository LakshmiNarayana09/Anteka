import React from "react";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumb = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-6">
      <div className="flex items-center gap-2 text-sm flex-wrap">
        <Home
          size={18}
          className="text-[#2FD3AE]"
        />

        <span className="text-[#2FD3AE]">
          Home
        </span>

        <ChevronRight size={14} className="text-gray-400" />

        <span className="text-gray-400">
          Search by Alphabet
        </span>
      </div>
    </div>
  );
};

export default Breadcrumb;