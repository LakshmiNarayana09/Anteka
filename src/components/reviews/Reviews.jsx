import React from "react";
import { Star } from "lucide-react";
import reviews from "./reviewsData";
import { useNavigate } from "react-router-dom";

function Reviews() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#F6FCFD] py-12 sm:py-14 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[380px_1fr]
            gap-10
            lg:gap-20
            items-start
          "
        >
          

          <div
            className="
              bg-white
              rounded-[10px]
              shadow-[0_30px_70px_rgba(0,0,0,0.08)]
              p-6
              sm:p-8
              lg:p-12
              min-h-auto
              lg:min-h-[500px]
              flex
              flex-col
              justify-between
            "
          >
            

            <div className="flex justify-between items-start gap-4">
              <h2
                className="
                  text-[#333333]
                  text-[20px]
                  sm:text-[22px]
                  lg:text-[28px]
                  font-bold
                  leading-tight
                "
              >
                Average
                <br />
                Pharmacy
                <br />
                Rating
              </h2>

              <div className="text-right">
                <h1
                  className="
                    text-[#333333]
                    text-[56px]
                    sm:text-[64px]
                    lg:text-[72px]
                    font-bold
                    leading-none
                  "
                >
                  4.8
                </h1>

                <div className="flex justify-end mt-3 gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      className={
                        index < 4
                          ? "fill-[#FFC52F] text-[#FFC52F]"
                          : "text-[#FFC52F]"
                      }
                    />
                  ))}
                </div>
              </div>
            </div>

            

            <p
              className="
                mt-8
                lg:mt-12
                text-center
                text-[#666666]
                text-[16px]
                sm:text-[18px]
                lg:text-[20px]
                leading-7
                lg:leading-8
              "
            >
              Overall rating based on
              <br />
              4,349 customer reviews.
            </p>

            

            <button
              className="
                mt-8
                lg:mt-12
                w-full
                h-[56px]
                lg:h-[62px]
                rounded-full
                bg-[#35D5BC]
                text-white
                font-semibold
                text-[16px]
                lg:text-[18px]
                hover:bg-[#28C2AA]
                duration-300
                shadow-[0_18px_40px_rgba(53,213,188,0.35)]
              "
            >
              Write a Review
            </button>
          </div>

          

          <div className="flex flex-col">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="pb-8 lg:pb-10 last:pb-0"
              >
                

                <div
                  className="
                    flex
                    flex-col
                    sm:flex-row
                    sm:flex-wrap
                    sm:items-center
                    gap-2
                    sm:gap-3
                  "
                >
                  <h3
                    className="
                      text-[#333333]
                      text-[18px]
                      sm:text-[20px]
                      lg:text-[22px]
                      font-bold
                    "
                  >
                    {review.name},
                    <span className="font-semibold">
                      {" "}
                      {review.location},
                    </span>
                  </h3>

                  <span
                    className="
                      text-[#8A8A8A]
                      text-[15px]
                      sm:text-[18px]
                      lg:text-[20px]
                    "
                  >
                    {review.date}
                  </span>

                  

                  <div className="flex gap-1 sm:ml-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={18}
                        className={
                          index < review.rating
                            ? "fill-[#FFC52F] text-[#FFC52F]"
                            : "text-[#D9D9D9]"
                        }
                      />
                    ))}
                  </div>
                </div>

                

                <p
                  className="
                    mt-4
                    lg:mt-5
                    text-[#555555]
                    text-[16px]
                    sm:text-[17px]
                    lg:text-[18px]
                    leading-8
                    lg:leading-9
                  "
                >
                  {review.review}
                </p>
              </div>
            ))}

            

            <button
              onClick={() => navigate("/reviews")}
              className="
                mt-6
                flex
                items-center
                gap-3
                text-[#35D5BC]
                text-[18px]
                sm:text-[20px]
                lg:text-[22px]
                font-semibold
                hover:gap-5
                duration-300
                w-fit
              "
            >
              <span className="text-[24px] lg:text-[30px]">»</span>

              View All 4,349 Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;