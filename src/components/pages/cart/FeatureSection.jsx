import React from "react";
import featureData from "./featureData";

const FeatureSection = () => {
  return (
    <section className="mt-20">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {featureData.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.id}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-[#2FD3AE]/10 flex items-center justify-center">

                <Icon
                  size={34}
                  className="text-[#2FD3AE]"
                />

              </div>

              <h3 className="mt-6 text-lg font-semibold text-[#394045]">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                {feature.description}
              </p>

            </div>
          );
        })}

      </div>

    </section>
  );
};

export default FeatureSection;