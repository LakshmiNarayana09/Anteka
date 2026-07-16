import React from "react";
import statisticsData from "./statisticsData";

const Statistics = () => {
  return (
    <section className="py-20">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {statisticsData.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="text-center"
            >

              

              <div className="w-20 h-20 mx-auto rounded-full bg-[#F3FFFC] border border-[#D7F7EE] flex items-center justify-center">

                <Icon
                  size={34}
                  className="text-[#2FD3AE]"
                />

              </div>

              

              <h3 className="mt-5 text-3xl font-bold text-[#394045]">
                {item.value}
              </h3>

              

              <h4 className="mt-2 font-semibold text-[#394045]">
                {item.title}
              </h4>

              

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

export default Statistics;