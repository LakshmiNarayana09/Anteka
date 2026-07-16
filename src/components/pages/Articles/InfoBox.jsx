import React from "react";
import { Info } from "lucide-react";

const InfoBox = ({ children }) => {
  return (
    <div className="my-8 rounded-xl bg-[#F3FFFC] border-l-4 border-[#2FD3AE] p-6 flex gap-4">
      <Info
        size={24}
        className="text-[#2FD3AE] flex-shrink-0 mt-1"
      />

      <p className="text-gray-700 leading-7">
        {children}
      </p>
    </div>
  );
};

export default InfoBox;