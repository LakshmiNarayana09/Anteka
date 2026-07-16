import React from "react";
import cartData from "./cartData";
import CartItem from "./CartItem";

const CartList = () => {
  return (
    <section>

      <div className="bg-white border rounded-xl p-6">

        {cartData.map((item) => (
          <CartItem
            key={item.id}
            item={item}
          />
        ))}

      </div>

    </section>
  );
};

export default CartList;