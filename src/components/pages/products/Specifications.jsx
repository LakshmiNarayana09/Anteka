import React from "react";
import { Circle } from "lucide-react";

const specifications = [
  {
    label: "Manufacturer",
    value: "Abbott Laboratories, USA",
  },
  {
    label: "Active Ingredient",
    value: "Pancreatin",
  },
  {
    label: "Shelf Life",
    value: "36 Months",
  },
  {
    label: "Country of Origin",
    value: "United States",
  },
];

const Specifications = () => {
  return (
    <div className="mt-6">
      <h3 className="text-sm font-bold uppercase tracking-wider text-[#394045] mb-4">
        Specifications
      </h3>

      <div className="space-y-3">
        {specifications.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-md"
          >
            <Circle
              size={6}
              fill="#F5C542"
              className="text-[#F5C542] flex-shrink-0"
            />

            <span className="text-sm text-gray-500">
              {item.label}:
            </span>

            <span className="text-sm font-medium text-gray-700">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specifications;