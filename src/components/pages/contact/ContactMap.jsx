import React from "react";
import mapImg from "../../../assets/contact/map.png"

const ContactMap = () => {
  return (
    <section className="mt-16">

      <h2 className="text-3xl font-bold text-[#394045] mb-6">
        How to Reach Us
      </h2>

      <p className="text-gray-500 leading-7 mb-8">
        Visit our pharmacy or contact us using the information above. We are
        conveniently located and easy to reach by public transport or car.
      </p>

      <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">

        <iframe
          title="HealthCare Location"
          src={mapImg}
          width="100%"
          height="500"
          loading="lazy"
          className="border-0"
          allowFullScreen
        />

      </div>

    </section>
  );
};

export default ContactMap;