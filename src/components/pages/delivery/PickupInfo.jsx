import React from "react";
import { MapPin } from "lucide-react";
import pickupLocations from "./pickupLocations";

const PickupInfo = () => {
  return (
    <section className="py-20">

      <div className="grid lg:grid-cols-2 gap-12 items-start">

        {/* Left */}

        <div>

          <h2 className="text-3xl font-bold text-[#394045]">
            Store Pickup
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            Prefer to collect your order yourself? Choose store pickup
            during checkout and visit your selected branch at your
            convenience.
          </p>

          <p className="mt-5 text-gray-600 leading-8">
            You will receive a confirmation email or SMS when your
            order is ready for collection.
          </p>

        </div>

        {/* Right */}

        <div className="bg-[#F8F9FA] rounded-xl p-6">

          <h3 className="font-semibold text-[#394045] mb-6">
            Available Pickup Locations
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">

            {pickupLocations.map((location, index) => (

              <div
                key={index}
                className="flex items-center gap-3"
              >

                <MapPin
                  size={18}
                  className="text-[#2FD3AE]"
                />

                <span className="text-gray-600">
                  {location}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default PickupInfo;