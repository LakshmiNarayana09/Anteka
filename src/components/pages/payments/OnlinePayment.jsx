import React from "react";
import secureImage from "../../../assets/payments/security.png";
import cardLogos from "./cardLogos";

const OnlinePayment = () => {
  return (
    <section className="py-20">

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <h2 className="text-3xl font-bold text-[#394045]">
            Secure Online Payment
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            We use encrypted payment technology to protect your personal
            and financial information. Every transaction is processed
            through trusted payment providers.
          </p>

          <div className="flex flex-wrap gap-5 mt-8">

            {cardLogos.map((logo, index) => (

              <div
                key={index}
                className="w-20 h-14 border rounded-lg flex items-center justify-center bg-white"
              >
                <img
                  src={logo}
                  alt="Payment"
                  className="max-h-8 object-contain"
                />
              </div>

            ))}

          </div>

        </div>


        <div className="flex justify-center">

          <img
            src={secureImage}
            alt="Secure Payment"
            className="w-full max-w-md"
          />

        </div>

      </div>

    </section>
  );
};

export default OnlinePayment;