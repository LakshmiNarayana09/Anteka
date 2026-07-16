import React from "react";
import { Star, ThumbsUp, Reply } from "lucide-react";

const ReviewCard = ({ review }) => {
  return (
    <div className="border-b border-gray-200 py-6">

      <div className="flex flex-col md:flex-row md:justify-between gap-3">

        <div>

          <h3 className="font-semibold text-[#394045]">
            {review.name}
          </h3>

          <p className="text-sm text-gray-500">
            {review.location} • {review.date}
          </p>

        </div>

        <div className="flex items-center gap-1 text-[#F5B301]">
          {[...Array(review.rating)].map((_, index) => (
            <Star
              key={index}
              size={16}
              fill="currentColor"
            />
          ))}
        </div>

      </div>

      <p className="mt-4 text-gray-600 leading-7">
        {review.review}
      </p>

      <div className="flex items-center gap-6 mt-5">

        <button className="flex items-center gap-2 text-gray-500 hover:text-[#2FD3AE] transition">
          <ThumbsUp size={18} />
          Helpful
        </button>

        <button className="flex items-center gap-2 text-gray-500 hover:text-[#2FD3AE] transition">
          <Reply size={18} />
          Reply
        </button>

      </div>

    </div>
  );
};

export default ReviewCard;