import React from "react";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumb = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-6">
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <Home size={14} className="text-[#2FD3AE]" />

        <span className="text-[#2FD3AE] hover:underline cursor-pointer">
          Home
        </span>

        <ChevronRight size={14} className="text-gray-400" />

        <span className="text-[#2FD3AE] hover:underline cursor-pointer">
          Medicines
        </span>

        <ChevronRight size={14} className="text-gray-400" />

        <span className="text-[#2FD3AE] hover:underline cursor-pointer">
          Enzyme Products
        </span>

        <ChevronRight size={14} className="text-gray-400" />

        <span className="text-gray-400">
          Creon 10000 Capsules
        </span>
      </div>
    </div>
  );
};

export default Breadcrumb;