import React from "react";

const PromoCode = () => {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm">

      <h2 className="text-xl font-bold mb-5">
        Promo Code
      </h2>

      <input
        type="text"
        placeholder="Enter promo code"
        className="w-full h-12 border rounded-full px-5 focus:outline-none focus:border-[#2FD3AE]"
      />

      <button className="w-full mt-5 h-12 rounded-full border border-[#2FD3AE] text-[#2FD3AE] hover:bg-[#2FD3AE] hover:text-white transition">
        Apply
      </button>

    </div>
  );
};

export default PromoCode;