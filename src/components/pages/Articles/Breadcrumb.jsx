import React from "react";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumb = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
      <div className="flex items-center flex-wrap gap-2 text-sm">

        <Home size={15} className="text-[#2FD3AE]" />

        <span className="text-[#2FD3AE] hover:underline cursor-pointer">
          Home
        </span>

        <ChevronRight size={14} className="text-gray-400" />

        <span className="text-[#2FD3AE] hover:underline cursor-pointer">
          Blog
        </span>

        <ChevronRight size={14} className="text-gray-400" />

        <span className="text-gray-500">
          Understanding Medicines and Safe Usage
        </span>

      </div>
    </div>
  );
};

export default Breadcrumb;