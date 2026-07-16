import React from "react";
import {
  Briefcase,
  Megaphone,
  Building2,
  Mail,
  MapPin,
} from "lucide-react";

import partnerData from "./partnerData";

const PartnerSection = () => {
  return (
    <section className="mt-16">

      <h2 className="text-3xl font-bold text-[#394045] mb-10">
        Business & Partnership
      </h2>

      <div className="grid lg:grid-cols-3 gap-8">

        <div className="bg-white border rounded-xl p-8 shadow-sm">

          <div className="w-14 h-14 rounded-full bg-[#2FD3AE]/10 flex items-center justify-center mb-5">

            <Briefcase
              className="text-[#2FD3AE]"
              size={26}
            />

          </div>

          <h3 className="text-xl font-semibold mb-4">
            {partnerData.partnership.title}
          </h3>

          <p className="text-gray-600 leading-7">
            {partnerData.partnership.description}
          </p>

        </div>


        <div className="bg-white border rounded-xl p-8 shadow-sm">

          <div className="w-14 h-14 rounded-full bg-[#2FD3AE]/10 flex items-center justify-center mb-5">

            <Megaphone
              className="text-[#2FD3AE]"
              size={26}
            />

          </div>

          <h3 className="text-xl font-semibold mb-4">
            {partnerData.advertising.title}
          </h3>

          <p className="text-gray-600 leading-7 mb-5">
            {partnerData.advertising.description}
          </p>

          <div className="flex items-center gap-3 text-[#2FD3AE]">

            <Mail size={18} />

            <span>{partnerData.advertising.email}</span>

          </div>

        </div>


        <div className="bg-white border rounded-xl p-8 shadow-sm">

          <div className="w-14 h-14 rounded-full bg-[#2FD3AE]/10 flex items-center justify-center mb-5">

            <Building2
              className="text-[#2FD3AE]"
              size={26}
            />

          </div>

          <h3 className="text-xl font-semibold mb-4">
            {partnerData.office.title}
          </h3>

          <div className="space-y-3">

            {partnerData.office.address.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3"
              >
                <MapPin
                  size={18}
                  className="text-[#2FD3AE] mt-1"
                />

                <span className="text-gray-600">
                  {item}
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default PartnerSection;