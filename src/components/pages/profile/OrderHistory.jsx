import React from "react";
import ordersData from "./ordersData";

const OrderHistory = () => {
  return (
    <section>

      <h2 className="text-2xl font-bold text-[#394045] mb-6">
        Order History
      </h2>

      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">

        {ordersData.map((order) => (
          <div
            key={order.id}
            className="flex items-center justify-between gap-4 px-6 py-5 border-b last:border-b-0"
          >

            <div className="flex items-center gap-4">

              <img
                src={order.image}
                alt={order.name}
                className="w-16 h-16 object-contain"
              />

              <div>

                <h4 className="font-semibold text-[#394045]">
                  {order.name}
                </h4>

                <p className="text-sm text-gray-500 mt-1">
                  Ordered on {order.date}
                </p>

              </div>

            </div>

            <p className="font-bold text-[#2FD3AE]">
              {order.price}
            </p>

          </div>
        ))}

        <div className="flex justify-between px-6 py-5">

          <button className="px-6 py-2 rounded-full bg-[#2FD3AE] text-white font-semibold hover:bg-[#24b796] transition">
            View All Orders
          </button>

          <button className="px-6 py-2 rounded-full border border-[#2FD3AE] text-[#2FD3AE] hover:bg-[#2FD3AE] hover:text-white transition">
            Repeat Order
          </button>

        </div>

      </div>

    </section>
  );
};

export default OrderHistory;