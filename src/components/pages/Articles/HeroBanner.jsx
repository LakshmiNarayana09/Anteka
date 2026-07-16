import React from "react";
import heroImage from "../../../assets/articles/hero.jpg";

const HeroBanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8">

      <div className="relative rounded-xl overflow-hidden">

       
        <img
          src={heroImage}
          alt="Understanding Medicines"
          className="w-full h-[250px] md:h-[380px] lg:h-[450px] object-cover"
        />

        

        <div className="absolute inset-0 bg-black/60" />

        

        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">

          <div className="flex items-center gap-3 flex-wrap mb-4">

            <span className="bg-[#2FD3AE] text-white text-xs px-4 py-1 rounded-full">
              Medicine
            </span>

            <span className="text-white/80 text-sm">
              18 March 2026
            </span>

          </div>

          <h1 className="text-white font-bold leading-tight text-2xl md:text-4xl lg:text-5xl max-w-4xl">
            Understanding Medicines and Safe Usage
          </h1>

        </div>

      </div>

    </section>
  );
};

export default HeroBanner;