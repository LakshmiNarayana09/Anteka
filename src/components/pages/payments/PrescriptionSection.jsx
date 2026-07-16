import React from "react";
import prescriptionImage from "../../../assets/payments/main.png";
import prescriptionTips from "./prescriptionTips";

const PrescriptionSection = () => {
  return (
    <section className="py-16">

      <div className="grid lg:grid-cols-3 gap-10 items-center">


        <div>

          <h2 className="text-2xl font-bold text-[#394045]">
            Prescription Medicines
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            Some medicines require a valid prescription before they can be
            purchased. Our pharmacists carefully review every prescription
            to ensure your order complies with healthcare regulations.
          </p>

          <ul className="mt-8 space-y-4">

            {prescriptionTips.map((tip, index) => (
              <li
                key={index}
                className="flex items-start gap-3"
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-[#2FD3AE]" />

                <span className="text-gray-600">
                  {tip}
                </span>
              </li>
            ))}

          </ul>

        </div>


        <div className="bg-[#F8F9FA] rounded-xl p-8">

          <h3 className="text-xl font-semibold text-[#394045] mb-6">
            Verify Your Prescription
          </h3>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Prescription Number"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#2FD3AE]"
            />

            <input
              type="text"
              placeholder="Patient Name"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#2FD3AE]"
            />

            <button
              className="w-full bg-[#2FD3AE] hover:bg-[#27bea1] text-white py-3 rounded-lg font-semibold transition"
            >
              Verify Prescription
            </button>

          </form>

        </div>

        
        <div className="flex justify-center">

          <img
            src={prescriptionImage}
            alt="Prescription"
            className="w-full max-w-[320px]"
          />

        </div>

      </div>

    </section>
  );
};

export default PrescriptionSection;