import React from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const {
    image,
    badge,
    inStock,
    title,
    manufacturer,
    dosage,
    code,
    rating,
    price,
    oldPrice,
    available,
  } = product;

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="
        bg-white
        rounded-[8px]
        overflow-hidden
        flex
        flex-col
        h-full
        mb-8
        lg:mb-[50px]
        transition-all
        duration-300
        hover:shadow-lg
        cursor-pointer
      "
    >
      
      <div className="relative p-4 sm:p-5">
        

        <span
          className="
            absolute
            left-4
            top-4
            bg-[#37D5BC]
            text-white
            text-[10px]
            sm:text-[11px]
            px-2.5
            sm:px-3
            py-1
            rounded-full
            font-medium
          "
        >
          {badge}
        </span>

        

        <button
          className="
            absolute
            right-4
            top-4
            w-8
            h-8
            rounded-full
            border
            border-[#EAEAEA]
            flex
            items-center
            justify-center
            hover:bg-[#37D5BC]
            hover:text-white
            transition-all
          "
        >
          <Heart size={16} />
        </button>

        

        <div className="flex justify-center mt-8 mb-4">
          <img
            src={image}
            alt={title}
            className="
              h-[120px]
              sm:h-[130px]
              lg:h-[140px]
              w-auto
              object-contain
            "
          />
        </div>
      </div>

      

      <div className="px-4 sm:px-5 flex-1 flex flex-col">
        

        <p
          className={`text-[12px] font-medium ${
            inStock ? "text-[#37D54A]" : "text-[#FF6A6A]"
          }`}
        >
          {inStock ? "In Stock" : "Out of Stock"}
        </p>

        

        <div className="flex items-center mt-2 mb-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={14}
              className={
                index < rating
                  ? "fill-[#FFC107] text-[#FFC107]"
                  : "text-gray-300"
              }
            />
          ))}
        </div>

        

        <h3
          className="
            text-[#333]
            text-[15px]
            sm:text-[16px]
            font-semibold
            leading-6
            min-h-[48px]
            lg:min-h-[42px]
          "
        >
          {title}
        </h3>

        

        <div
          className="
            mt-3
            text-[#A0A0A0]
            text-[12px]
            space-y-1
          "
        >
          <p>Manufacturer: {manufacturer}</p>
          <p>Pack: {dosage}</p>
          <p>Product Code: {code}</p>
        </div>

        

        <div className="mt-auto pt-6 flex items-end justify-between gap-3">
          <div>
            <h2
              className="
                text-[#2B2B2B]
                text-[24px]
                sm:text-[26px]
                lg:text-[28px]
                font-bold
                leading-none
              "
            >
              {price} ₽
            </h2>

            <p
              className="
                mt-2
                text-[#B6B6B6]
                text-[13px]
                lg:text-[14px]
                line-through
              "
            >
              {oldPrice} ₽
            </p>
          </div>

          <button
            className={`
              w-[48px]
              h-[48px]
              lg:w-[52px]
              lg:h-[52px]
              rounded-full
              flex
              items-center
              justify-center
              transition-all
              duration-300
              ${
                available
                  ? "bg-[#37D5BC] hover:bg-[#29c3ab] text-white"
                  : "bg-[#D9D9D9] text-white"
              }
            `}
          >
            <ShoppingCart size={20} className="lg:w-[22px] lg:h-[22px]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;