import React from "react";
import paymentData from "./paymentData";

const PaymentMethods = () => {
  return (
    <section className="py-20">

      <div className="mb-12 text-center">

        <h2 className="text-3xl font-bold text-[#394045]">
          Payment Methods
        </h2>

        <p className="mt-3 text-gray-600">
          Choose the payment option that works best for you.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {paymentData.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="border rounded-xl p-6 hover:shadow-lg transition"
            >

              <div className="w-14 h-14 rounded-full bg-[#F3FFFC] flex items-center justify-center">

                <Icon
                  size={28}
                  className="text-[#2FD3AE]"
                />

              </div>

              <h3 className="mt-5 text-lg font-semibold text-[#394045]">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-500 leading-7 text-sm">
                {item.description}
              </p>

            </div>
          );
        })}

      </div>

    </section>
  );
};

export default PaymentMethods;