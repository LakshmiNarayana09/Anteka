import React from "react";
import { Quote } from "lucide-react";

const QuoteBlock = () => {
  return (
    <div className="my-12 bg-[#1F2937] rounded-xl p-8 text-white relative overflow-hidden">

      <Quote
        size={48}
        className="absolute top-6 right-6 opacity-20"
      />

      <p className="text-xl leading-9 italic">
        "Taking medicines responsibly is one of the most effective ways
        to improve treatment outcomes and reduce health risks."
      </p>

      <div className="mt-6">
        <h4 className="font-semibold">
          Dr. John Smith
        </h4>

        <p className="text-gray-300 text-sm">
          Senior Medical Consultant
        </p>
      </div>

    </div>
  );
};

export default QuoteBlock;