import React from "react";
import { Home, ChevronRight } from "lucide-react";

const Breadcrumb = () => {
  return (
    <div className="flex items-center gap-2 text-sm flex-wrap">

      <Home
        size={15}
        className="text-[#2FD3AE]"
      />

      <span className="text-[#2FD3AE]">
        Home
      </span>

      <ChevronRight size={14} className="text-gray-400" />

      <span className="text-gray-400">
        Blog
      </span>

    </div>
  );
};

export default Breadcrumb;