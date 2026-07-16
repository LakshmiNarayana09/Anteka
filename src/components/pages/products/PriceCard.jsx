import React from "react";
import { Heart, Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";

const PriceCard = () => {
  const [quantity, setQuantity] = useState(1);

  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg p-6 shadow-sm lg:sticky lg:top-6">

      
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">Availability</span>

        <span className="text-sm font-semibold text-[#2FD3AE]">
          In Stock
        </span>
      </div>

      

      <div className="mt-6">
        <p className="text-gray-400 line-through text-lg">
          $24.99
        </p>

        <h2 className="text-4xl font-bold text-[#394045]">
          $19.99
        </h2>
      </div>

      

      <div className="mt-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-600 mb-3">
          Quantity
        </p>

        <div className="flex items-center border rounded-md overflow-hidden">

          <button
            onClick={decrease}
            className="w-12 h-12 flex items-center justify-center hover:bg-gray-100"
          >
            <Minus size={18} />
          </button>

          <div className="flex-1 text-center font-semibold">
            {quantity}
          </div>

          <button
            onClick={increase}
            className="w-12 h-12 flex items-center justify-center hover:bg-gray-100"
          >
            <Plus size={18} />
          </button>

        </div>
      </div>

      

      <div className="mt-8 space-y-3">

        <button className="w-full h-12 rounded-md bg-[#2FD3AE] hover:bg-[#27c09b] text-white font-semibold transition flex items-center justify-center gap-2">
          <ShoppingCart size={18} />
          Add to Cart
        </button>

        <button className="w-full h-12 rounded-md border border-[#2FD3AE] text-[#2FD3AE] hover:bg-[#2FD3AE] hover:text-white font-semibold transition">
          Buy Now
        </button>

        <button className="w-full h-12 rounded-md border hover:bg-gray-50 transition flex items-center justify-center gap-2">
          <Heart size={18} />
          Add to Wishlist
        </button>

      </div>

      

      <div className="mt-8 border-t pt-5 space-y-3 text-sm text-gray-500">

        <div className="flex justify-between">
          <span>SKU</span>
          <span className="font-medium text-gray-700">
            25563
          </span>
        </div>

        <div className="flex justify-between">
          <span>Category</span>
          <span className="font-medium text-gray-700">
            Enzyme Products
          </span>
        </div>

      </div>

    </div>
  );
};

export default PriceCard;