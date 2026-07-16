import React from "react";
import workSteps from "./workSteps";

function HowWeWork() {
  return (
    <section className="bg-white py-12 sm:py-14 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        

        <h2
          className="
            text-[#2E2E2E]
            text-[30px]
            sm:text-[36px]
            md:text-[40px]
            lg:text-[44px]
            font-bold
            leading-tight
            mb-10
            sm:mb-12
            lg:mb-16
          "
        >
          How We Work?
        </h2>

        

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-8
            lg:gap-10
          "
        >
          {workSteps.map((step) => (
            <div
              key={step.id}
              className="
                flex
                items-start
                gap-4
                lg:gap-6
              "
            >
              

              <div className="flex-shrink-0 mt-1">
                <img
                  src={step.image}
                  alt={step.title}
                  className="
                    w-[48px]
                    h-[48px]
                    sm:w-[54px]
                    sm:h-[54px]
                    object-contain
                  "
                />
              </div>

              
              <div className="flex-1">
                

                <div className="flex items-center gap-3 sm:gap-4">
                  <div
                    className="
                      w-[32px]
                      h-[32px]
                      sm:w-[34px]
                      sm:h-[34px]
                      rounded-full
                      border-2
                      border-[#35D5BC]
                      border-dashed
                      flex
                      items-center
                      justify-center
                      text-[#35D5BC]
                      text-[14px]
                      sm:text-[16px]
                      font-bold
                      shrink-0
                    "
                  >
                    {step.id}
                  </div>

                  <h3
                    className="
                      text-[#2E2E2E]
                      text-[20px]
                      sm:text-[22px]
                      font-bold
                      leading-tight
                    "
                  >
                    {step.title}
                  </h3>
                </div>

              

                <p
                  className="
                    mt-4
                    ml-0
                    sm:ml-[50px]
                    text-[#8A8A8A]
                    text-[15px]
                    sm:text-[16px]
                    leading-7
                    sm:leading-8
                    max-w-full
                    sm:max-w-[280px]
                  "
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;