import React from "react";
import { useNavigate } from "react-router-dom";
import cartData from "./cartData";

const CartSummary = () => {
  const navigate = useNavigate();

  const subtotal = cartData.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = 5;

  const total = subtotal + shipping;

  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm">

      <h2 className="text-xl font-bold mb-6">
        Order Summary
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>

        <hr />

        <div className="flex justify-between text-xl font-bold">

          <span>Total</span>

          <span className="text-[#2FD3AE]">
            ${total.toFixed(2)}
          </span>

        </div>

      </div>

      <button
        onClick={() => navigate("/checkout")}
        className="w-full mt-8 h-12 rounded-full bg-[#2FD3AE] text-white font-semibold hover:bg-[#24ba99]"
      >
        Checkout
      </button>

    </div>
  );
};

export default CartSummary;