import React from "react";

const Tags = () => {
  const tags = [
    "Medicine",
    "Health",
    "Wellness",
    "Lifestyle",
    "Pharmacy",
  ];

  return (
    <div className="mt-12">
      <h3 className="text-xl font-semibold text-[#243B6B] mb-4">
        Tags
      </h3>

      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <button
            key={tag}
            className="px-4 py-2 rounded-full border border-gray-300 text-sm hover:bg-[#2FD3AE] hover:text-white hover:border-[#2FD3AE] transition"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tags;