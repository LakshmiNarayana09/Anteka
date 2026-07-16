import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "Promotions",
    icon: "%",
    bg: "bg-sky-500",
    text: "text-white",
  },
  {
    title: "Discounts",
    icon: "₽",
    bg: "bg-orange-500",
    text: "text-white",
  },
  {
    title: "COVID-19",
    bg: "bg-white",
    text: "text-gray-600",
  },
  {
    title: "Allergy",
    bg: "bg-white",
    text: "text-gray-600",
  },
  {
    title: "Medical Cosmetics",
    bg: "bg-white",
    text: "text-gray-600",
  },
  {
    title: "Intestine",
    bg: "bg-white",
    text: "text-gray-600",
  },
  {
    title: "Dairy",
    bg: "bg-white",
    text: "text-gray-600",
  },
  {
    title: "Joints",
    bg: "bg-white",
    text: "text-gray-600",
  },
  {
    title: "More +52",
    bg: "bg-white",
    text: "text-gray-600",
  },
];

function CategoryNav() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    const slug = category.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

    navigate(`/category/${slug}`);
  };

  return (
    <div className="w-full mt-5">
      <div
        className="
          flex
          flex-wrap
          gap-2

          sm:flex-nowrap
          sm:overflow-x-auto
          sm:overflow-y-hidden
          sm:scrollbar-hide
          sm:[-webkit-overflow-scrolling:touch]
        "
      >
        {categories.map((item, index) => (
          <button
            key={index}
            onClick={() => handleCategoryClick(item)}
            className={`
              flex
              h-[30px]
              items-center
              gap-2
              rounded-md
              px-4
              whitespace-nowrap
              text-[14px]
              font-['Raleway']
              font-normal
              tracking-[0.05em]
              transition-all
              duration-200
              hover:opacity-90
              shrink-0
              ${item.bg}
              ${item.text}
            `}
          >
            {item.icon && (
              <span className="text-sm font-semibold">
                {item.icon}
              </span>
            )}

            <span>{item.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryNav;