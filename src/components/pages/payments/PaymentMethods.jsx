import React from "react";
import paymentMethodsData from "./paymentMethodsData";

const PaymentMethods = () => {
  return (
    <section className="py-12">

      <div className="mb-10">

        <h2 className="text-2xl lg:text-3xl font-bold text-[#394045]">
          Payment Options
        </h2>

        <p className="mt-3 max-w-3xl text-gray-600 leading-8">
          Choose the payment method that is most convenient for you.
          All transactions are processed through secure payment systems
          to keep your personal information protected.
        </p>

      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {paymentMethodsData.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="border rounded-xl p-6 hover:shadow-lg transition bg-white"
            >
              <div className="w-14 h-14 rounded-full bg-[#F3FFFC] flex items-center justify-center">

                <Icon
                  size={28}
                  className="text-[#2FD3AE]"
                />

              </div>

              <h3 className="mt-5 font-semibold text-lg text-[#394045]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
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