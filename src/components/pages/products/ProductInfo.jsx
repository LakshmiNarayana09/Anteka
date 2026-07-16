import React from "react";
import { Star } from "lucide-react";
import Specifications from "./Specifications";

const ProductInfo = () => {
  return (
    <div className="w-full">

      <div className="flex flex-wrap items-center gap-3">

        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={16}
              fill="#F5C542"
              stroke="#F5C542"
            />
          ))}
        </div>

        <span className="text-sm text-gray-500">
          6 Reviews
        </span>

        <span className="text-sm font-semibold text-[#2FD3AE]">
          In Stock
        </span>
      </div>


      <div className="mt-5">
        <p className="text-sm text-gray-500">
          SKU:
          <span className="font-semibold text-gray-700 ml-2">
            25563
          </span>
        </p>
      </div>

      <Specifications />
      
    </div>
  );
};

export default ProductInfo;