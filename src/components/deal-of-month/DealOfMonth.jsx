import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Products from "../products/Products";

function DealOfMonth() {
  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        <div
          className="
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-6
            mb-8
            lg:mb-10
          "
        >
          <h2
            className="
              text-black
              text-[28px]
              sm:text-[30px]
              md:text-[36px]
              lg:text-[42px]
              font-bold
              leading-tight
            "
          >
            Deal of the Month
          </h2>

          

          <div className="flex items-center gap-3 sm:gap-4 self-start sm:self-auto">
            <button
              className="
                w-11
                h-11
                sm:w-12
                sm:h-12
                lg:w-14
                lg:h-14
                rounded-full
                bg-white
                flex
                items-center
                justify-center
                text-black
                transition-all
                duration-300
                hover:bg-[#35D5BC]
                hover:text-white
              "
            >
              <ChevronLeft
                size={20}
                className="sm:w-[22px] sm:h-[22px] lg:w-6 lg:h-6"
              />
            </button>

            <button
              className="
                w-11
                h-11
                sm:w-12
                sm:h-12
                lg:w-14
                lg:h-14
                rounded-full
                bg-white
                flex
                items-center
                justify-center
                text-black
                transition-all
                duration-300
                hover:bg-[#35D5BC]
                hover:text-white
              "
            >
              <ChevronRight
                size={20}
                className="sm:w-[22px] sm:h-[22px] lg:w-6 lg:h-6"
              />
            </button>
          </div>
        </div>

        

        <div className="space-y-8 lg:space-y-10">
          <Products />
          <Products reverse />
        </div>
      </div>
    </section>
  );
}

export default DealOfMonth;