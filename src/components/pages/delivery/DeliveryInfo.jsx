import React from "react";
import deliveryInfo from "./deliveryInfoData";
import { Truck } from "lucide-react";

const DeliveryInfo = () => {
  return (
    <section className="mb-16">

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 border-b border-gray-200 pb-8">

        {deliveryInfo.map((item, index) => (
          <div key={index}>

            <h4 className="text-sm font-semibold text-[#394045]">
              {item.title}
            </h4>

            <p className="text-sm text-gray-500 mt-2 leading-6">
              {item.value}
            </p>

          </div>
        ))}

      </div>


      <div className="mt-10 grid lg:grid-cols-[180px_1fr] gap-8 items-center">

        <div className="flex justify-center">

          <div className="w-36 h-36 rounded-full bg-[#F3FFFC] flex items-center justify-center">

            <Truck
              size={60}
              className="text-[#2FD3AE]"
            />

          </div>

        </div>

        <div>

          <h2 className="text-2xl font-bold text-[#394045] mb-4">
            Fast & Reliable Delivery
          </h2>

          <p className="text-gray-600 leading-8">
            We deliver medicines quickly and safely to your doorstep.
            Every order is carefully packed to ensure product quality
            during transportation.
          </p>

          <p className="text-gray-600 leading-8 mt-5">
            You can also choose to collect your order from any of our
            pharmacy branches at your convenience.
          </p>

        </div>

      </div>

    </section>
  );
};

export default DeliveryInfo;