import React from "react";
import historyData from "./historyData";

const CompanyHistory = () => {
  return (
    <section className="mb-20">


      <h2 className="text-3xl font-bold text-[#394045] mb-5">
        Company History
      </h2>

      <p className="text-gray-600 leading-8 max-w-5xl">
        Since our establishment, we have focused on delivering trusted
        healthcare solutions, expanding our services, and improving the
        customer experience through innovation and quality.
      </p>

      

      <div className="mt-10 bg-[#F8F9FB] rounded-xl p-6 md:p-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {historyData.map((item, index) => (
            <div key={index}>

              <h3 className="text-xl font-bold text-[#394045] mb-3">
                {item.year}
              </h3>

              <p className="text-gray-600 leading-7 text-sm">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default CompanyHistory;