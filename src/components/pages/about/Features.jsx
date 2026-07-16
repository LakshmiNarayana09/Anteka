import React from "react";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section className="mb-20">

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

        {featuresData.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.id}
              className="text-center"
            >

              <div className="w-16 h-16 mx-auto rounded-full bg-[#F3FFFC] flex items-center justify-center">

                <Icon
                  size={30}
                  className="text-[#2FD3AE]"
                />

              </div>

              <h3 className="mt-5 font-semibold text-[#394045] text-lg">
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

export default Features;