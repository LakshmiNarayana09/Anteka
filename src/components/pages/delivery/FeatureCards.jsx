import React from "react";
import featureData from "./featureData";

const FeatureCards = () => {
  return (
    <section className="py-16">

      <div className="text-center mb-10">

        <h2 className="text-3xl font-bold text-[#394045]">
          Why Choose Our Delivery
        </h2>

        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          We ensure every order reaches you safely, quickly,
          and in perfect condition.
        </p>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {featureData.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="border rounded-xl p-6 hover:shadow-lg transition text-center"
            >

              <div className="w-16 h-16 mx-auto rounded-full bg-[#F3FFFC] flex items-center justify-center">

                <Icon
                  size={30}
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

export default FeatureCards;