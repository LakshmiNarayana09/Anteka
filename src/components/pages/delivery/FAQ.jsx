import React from "react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import faqData from "./faqData";

const FAQ = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20">

      <div className="text-center mb-12">

        <h2 className="text-3xl font-bold text-[#394045]">
          Frequently Asked Questions
        </h2>

        <p className="mt-3 text-gray-600">
          Find answers to the most common delivery and pickup questions.
        </p>

      </div>

      <div className="space-y-4 max-w-4xl mx-auto">

        {faqData.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl overflow-hidden"
          >

            <button
              onClick={() =>
                setActive(active === index ? -1 : index)
              }
              className="w-full flex justify-between items-center p-5 font-semibold text-left"
            >
              {item.question}

              {active === index ? (
                <ChevronUp />
              ) : (
                <ChevronDown />
              )}
            </button>

            {active === index && (
              <div className="px-5 pb-5 text-gray-600 leading-7">
                {item.answer}
              </div>
            )}

          </div>
        ))}

      </div>

    </section>
  );
};

export default FAQ;