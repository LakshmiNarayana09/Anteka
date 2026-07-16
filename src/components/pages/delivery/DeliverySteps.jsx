import React from "react";
import deliverySteps from "./deliveryStepsData";

const DeliverySteps = () => {
  return (
    <section className="py-20">

      <div className="text-center mb-12">

        <h2 className="text-3xl font-bold text-[#394045]">
          How Delivery Works
        </h2>

        <p className="text-gray-600 mt-3">
          Ordering medicines is simple and convenient.
        </p>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {deliverySteps.map((step) => {
          const Icon = step.icon;

          return (
            <div
              key={step.id}
              className="relative text-center"
            >

              <div className="w-20 h-20 rounded-full bg-[#2FD3AE] mx-auto flex items-center justify-center">

                <Icon
                  size={34}
                  className="text-white"
                />

              </div>

              <div className="mt-5">

                <span className="text-sm text-[#2FD3AE] font-semibold">
                  STEP {step.id}
                </span>

                <h3 className="font-bold text-lg mt-2 text-[#394045]">
                  {step.title}
                </h3>

                <p className="text-gray-500 text-sm leading-7 mt-3">
                  {step.description}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
};

export default DeliverySteps;