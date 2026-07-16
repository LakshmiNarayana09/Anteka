import React from "react";
import certificatesImage from "../../../assets/about/main.png";

const Certificates = () => {
  return (
    <section className="py-20">


      <div className="text-center mb-12">

        <h2 className="text-3xl md:text-4xl font-bold text-[#394045]">
          Our Licenses & Certificates
        </h2>

        <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-8">
          We are fully licensed and certified to provide trusted
          pharmaceutical products and healthcare services. These
          certificates reflect our commitment to quality, safety, and
          customer satisfaction.
        </p>

      </div>

      

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">

        <img
          src={certificatesImage}
          alt="Company Certificates"
          className="w-full h-auto object-contain"
        />

      </div>

    </section>
  );
};

export default Certificates;