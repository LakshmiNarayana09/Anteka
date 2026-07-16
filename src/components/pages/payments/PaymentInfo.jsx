import React from "react";
import paymentInfoData from "./paymentInfoData";

const PaymentInfo = () => {
  return (
    <section className="py-16">

      <div className="grid md:grid-cols-2 gap-8">

        {paymentInfoData.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl p-8 hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold text-[#394045]">
              {item.title}
            </h3>

            <p className="mt-5 text-gray-600 leading-8">
              {item.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
};

export default PaymentInfo;