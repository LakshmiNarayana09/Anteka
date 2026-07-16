import React from "react";
import benefit1 from "../../assets/benefits/benefit1.png";
import benefit2 from "../../assets/benefits/benefit2.png";
import benefit3 from "../../assets/benefits/benefit3.png";
import benefit4 from "../../assets/benefits/benefit4.png";
import benefit5 from "../../assets/benefits/benefit5.png";

const benefits = [
  {
    icon: benefit1,
    title: "Wide Product Range",
    description: "Medical equipment, furniture, healthcare products and more.",
    color: "#5BD652",
  },
  {
    icon: benefit2,
    title: "Fast Delivery",
    description: "Fast delivery to any location with reliable service.",
    color: "#FF5C3D",
  },
  {
    icon: benefit3,
    title: "Quality Guarantee",
    description: "All products are certified and quality assured.",
    color: "#1CB6FF",
  },
  {
    icon: benefit4,
    title: "Affordable Prices",
    description: "We work hard to keep our prices competitive.",
    color: "#FFB400",
  },
  {
    icon: benefit5,
    title: "Customer Reviews",
    description: "Over 4,300 customer reviews and growing.",
    color: "#FF4F87",
  },
];

function Benefits() {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-16">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-10">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-5
            gap-y-8
            sm:gap-y-10
            gap-x-6
            lg:gap-x-10
            items-start
            lg:items-center
          "
        >
          {benefits.map((item, index) => (
            <div
              key={index}
              className="
                flex
                items-center
                gap-4
                w-full
                min-h-[95px]
              "
            >
              

              <div
                className="
                  flex-shrink-0
                  w-[48px]
                  h-[48px]
                  sm:w-[52px]
                  sm:h-[52px]
                  flex
                  items-center
                  justify-center
                "
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>


              <div className="flex-1">
                <h3
                  className="
                    text-[#2B2B2B]
                    text-[15px]
                    font-semibold
                    leading-5
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-1
                    text-[#8A8A8A]
                    text-[13px]
                    leading-[18px]
                  "
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;