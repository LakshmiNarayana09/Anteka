import React from "react";
import {
  RotateCcw,
  CircleCheck,
} from "lucide-react";

const RefundPolicy = () => {
  return (
    <section className="py-20">

      <div className="mb-10">

        <h2 className="text-3xl font-bold text-[#394045]">
          Refund Policy
        </h2>

        <p className="mt-4 text-gray-600 leading-8">
          We aim to provide the highest quality products and services.
          If there is an issue with your order, our support team is
          ready to help.
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="border rounded-xl p-8">

          <RotateCcw
            className="text-[#2FD3AE]"
            size={36}
          />

          <h3 className="mt-5 text-xl font-semibold text-[#394045]">
            Eligible Refunds
          </h3>

          <ul className="mt-5 space-y-3 text-gray-600 leading-7 list-disc pl-5">
            <li>Incorrect item received.</li>
            <li>Damaged product during delivery.</li>
            <li>Cancelled before shipping.</li>
            <li>Quality issue verified by our team.</li>
          </ul>

        </div>

        <div className="border rounded-xl p-8">

          <CircleCheck
            className="text-[#2FD3AE]"
            size={36}
          />

          <h3 className="mt-5 text-xl font-semibold text-[#394045]">
            Refund Process
          </h3>

          <ol className="mt-5 space-y-3 text-gray-600 leading-7 list-decimal pl-5">
            <li>Contact customer support.</li>
            <li>Provide your order number.</li>
            <li>Submit photos if required.</li>
            <li>Receive confirmation.</li>
            <li>Refund processed within 5–7 business days.</li>
          </ol>

        </div>

      </div>

    </section>
  );
};

export default RefundPolicy;