import React from "react";
import { useState } from "react";
import { Star } from "lucide-react";

const ReviewForm = () => {
  const [rating, setRating] = useState(5);

  return (
    <section className="mt-16 bg-white border border-gray-200 rounded-xl p-6 md:p-8">

      <h2 className="text-2xl font-bold text-[#394045]">
        Leave a Review
      </h2>

      <p className="text-gray-500 mt-2">
        Share your experience with our products and services.
      </p>


      <div className="flex items-center gap-2 mt-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setRating(index + 1)}
          >
            <Star
              size={28}
              className={
                index < rating
                  ? "text-[#F5B301] fill-[#F5B301]"
                  : "text-gray-300"
              }
            />
          </button>
        ))}
      </div>

      <form className="mt-8 space-y-5">

        <div className="grid md:grid-cols-2 gap-5">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#2FD3AE]"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#2FD3AE]"
          />

        </div>

        <textarea
          rows={6}
          placeholder="Write your review..."
          className="w-full border rounded-lg px-4 py-3 outline-none resize-none focus:border-[#2FD3AE]"
        />

        <button
          className="bg-[#2FD3AE] hover:bg-[#25b996] text-white px-8 py-3 rounded-lg transition"
        >
          Submit Review
        </button>

      </form>

    </section>
  );
};

export default ReviewForm;