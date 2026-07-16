import React from "react";

const RatingBar = ({ stars, count, percentage }) => {
  return (
    <div className="flex items-center gap-3">
      <span className="w-14 text-sm text-gray-600">
        {stars} ★
      </span>

      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#F5B301] rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <span className="w-8 text-right text-sm text-gray-500">
        {count}
      </span>
    </div>
  );
};

export default RatingBar;