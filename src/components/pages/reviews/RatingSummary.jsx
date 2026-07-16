import React from "react";
import { Star } from "lucide-react";
import RatingBar from "./RatingBar";

const ratings = [
  { stars: 5, count: 67, percentage: 90 },
  { stars: 4, count: 18, percentage: 55 },
  { stars: 3, count: 9, percentage: 30 },
  { stars: 2, count: 3, percentage: 15 },
  { stars: 1, count: 1, percentage: 5 },
];

const RatingSummary = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm h-fit">

      <h3 className="text-lg font-semibold text-[#394045]">
        Average Rating
      </h3>


      <div className="mt-5 flex items-center gap-4">

        <h2 className="text-5xl font-bold text-[#394045]">
          4.8
        </h2>

        <div>
          <div className="flex text-[#F5B301]">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={18}
                fill="currentColor"
              />
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-1">
            Based on 98 reviews
          </p>
        </div>

      </div>


      <button className="w-full mt-6 h-11 rounded-lg bg-[#2FD3AE] hover:bg-[#27c09b] text-white font-medium transition">
        Write a Review
      </button>

      

      <div className="my-6 border-t"></div>

      

      <div className="space-y-4">

        {ratings.map((item) => (
          <RatingBar
            key={item.stars}
            stars={item.stars}
            count={item.count}
            percentage={item.percentage}
          />
        ))}

      </div>

    </div>
  );
};

export default RatingSummary;