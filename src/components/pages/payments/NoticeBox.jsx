import React from "react";
import { Info } from "lucide-react";

const NoticeBox = () => {
  return (
    <section className="py-16">

      <div className="bg-[#F8F9FA] rounded-2xl p-8 lg:p-12">

        <div className="flex flex-col md:flex-row gap-6 items-start">

          <div className="w-14 h-14 rounded-full bg-[#2FD3AE]/10 flex items-center justify-center flex-shrink-0">

            <Info
              size={28}
              className="text-[#2FD3AE]"
            />

          </div>

          <div>

            <h2 className="text-2xl font-bold text-[#394045]">
              Important Payment Information
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              Online payments are processed immediately after your order
              is confirmed. If your payment is declined, please verify
              your card details or contact your bank before trying again.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              Refunds are issued using the same payment method used for
              the purchase. Processing times may vary depending on your
              bank or payment provider.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              If you experience any payment issues, our customer support
              team is available to assist you during business hours.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default NoticeBox;