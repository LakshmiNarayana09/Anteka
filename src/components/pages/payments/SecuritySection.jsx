import React from "react";
import securityImage from "../../../assets/payments/security.png";
import securityFeatures from "./securityFeatures";
import { ShieldCheck } from "lucide-react";

const SecuritySection = () => {
  return (
    <section className="py-20">

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <h2 className="text-3xl font-bold text-[#394045]">
            Safe & Secure Payments
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            We prioritize the security of every transaction. Modern
            encryption technologies protect your payment details from
            unauthorized access.
          </p>

          <div className="mt-10 space-y-6">

            {securityFeatures.map((item) => (

              <div
                key={item.id}
                className="flex gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#F3FFFC] flex items-center justify-center">

                  <ShieldCheck
                    className="text-[#2FD3AE]"
                    size={24}
                  />

                </div>

                <div>

                  <h4 className="font-semibold text-[#394045]">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 mt-1 leading-7">
                    {item.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

        
        <div className="flex justify-center">

          <img
            src={securityImage}
            alt="Secure Payment"
            className="w-full max-w-md"
          />

        </div>

      </div>

    </section>
  );
};

export default SecuritySection;