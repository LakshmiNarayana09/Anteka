import React from "react";
import { Home, ChevronRight } from "lucide-react";

const Breadcrumb = () => {
  return (
    <nav className="flex flex-wrap items-center gap-2 text-sm py-6">
      <Home size={15} className="text-[#2FD3AE]" />

      <span className="text-[#2FD3AE] hover:underline cursor-pointer">
        Home
      </span>

      <ChevronRight size={14} className="text-gray-400" />

      <span className="text-gray-500">
        Account Detailes
      </span>
    </nav>
  );
};

export default Breadcrumb;