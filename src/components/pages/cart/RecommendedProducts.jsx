import React from "react";
import { Star, ShoppingCart } from "lucide-react";
import recommendedData from "./recommendedData";

const RecommendedProducts = () => {
  return (
    <section className="mt-16">

      <div className="flex items-center justify-between mb-8">

        <h2 className="text-3xl font-bold text-[#394045]">
          You May Also Like
        </h2>

        <button className="text-[#2FD3AE] font-semibold hover:underline">
          View All
        </button>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

        {recommendedData.map((product) => (

          <div
            key={product.id}
            className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-lg transition"
          >

            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-contain"
            />

            <div className="flex mt-4">

              {[...Array(product.rating)].map((_, index) => (
                <Star
                  key={index}
                  size={14}
                  fill="#FACC15"
                  className="text-yellow-400"
                />
              ))}

            </div>

            <p className="text-xs text-gray-500 mt-2">
              {product.company}
            </p>

            <h3 className="font-semibold text-[#394045] mt-2 line-clamp-2 min-h-[48px]">
              {product.title}
            </h3>

            <div className="flex items-center justify-between mt-4">

              <div>

                <p className="text-lg font-bold text-[#394045]">
                  ${product.price}
                </p>

                <p className="text-xs text-gray-400 line-through">
                  ${product.oldPrice}
                </p>

              </div>

              <button className="w-10 h-10 rounded-full bg-[#2FD3AE] text-white flex items-center justify-center hover:bg-[#26b99a]">

                <ShoppingCart size={18} />

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default RecommendedProducts;