import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";

const CartItem = ({ item }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-6 border-b py-6">

      <div className="flex gap-5">

        <img
          src={item.image}
          alt={item.name}
          className="w-28 h-28 object-contain border rounded-lg"
        />

        <div>

          <h3 className="text-lg font-semibold text-[#394045]">
            {item.name}
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            Manufacturer: {item.manufacturer}
          </p>

          <p className="text-sm text-gray-500">
            Pack: {item.pack}
          </p>

        </div>

      </div>

      <div className="flex items-center gap-8">

        <div>

          <p className="text-xl font-bold text-[#394045]">
            ${item.price}
          </p>

          <p className="text-sm line-through text-gray-400">
            ${item.oldPrice}
          </p>

        </div>

        <div className="flex items-center border rounded-full">

          <button className="px-3 py-2 hover:bg-gray-100">
            <Minus size={16} />
          </button>

          <span className="px-4">
            {item.quantity}
          </span>

          <button className="px-3 py-2 hover:bg-gray-100">
            <Plus size={16} />
          </button>

        </div>

        <button className="text-red-500 hover:text-red-600">
          <Trash2 size={20} />
        </button>

      </div>

    </div>
  );
};

export default CartItem;