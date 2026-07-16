import React from "react";
import branchData from "./branchData";
import { MapPin, Phone, Clock } from "lucide-react";

const BranchLocations = () => {
  return (
    <section className="py-20">

      <div className="mb-12">

        <h2 className="text-3xl font-bold text-[#394045]">
          Our Pharmacy Branches
        </h2>

        <p className="mt-3 text-gray-600">
          Visit one of our branches for pickup or in-store shopping.
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-8">

        {branchData.map((branch) => (
          <div
            key={branch.id}
            className="border rounded-xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-[#394045]">
              {branch.city}
            </h3>

            <div className="mt-5 space-y-4">

              <div className="flex gap-3">
                <MapPin
                  size={18}
                  className="text-[#2FD3AE] mt-1"
                />
                <span>{branch.address}</span>
              </div>

              <div className="flex gap-3">
                <Phone
                  size={18}
                  className="text-[#2FD3AE]"
                />
                <span>{branch.phone}</span>
              </div>

              <div className="flex gap-3">
                <Clock
                  size={18}
                  className="text-[#2FD3AE]"
                />
                <span>{branch.hours}</span>
              </div>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
};

export default BranchLocations;