import React from "react";
import ReviewCard from "./ReviewCard";
import reviewsData from "./reviewsData";

const ReviewsList = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">

      {reviewsData.map((review) => (
        <ReviewCard
          key={review.id}
          review={review}
        />
      ))}

    </div>
  );
};

export default ReviewsList;