import React from "react";
import { ChevronRight } from "lucide-react";

function KnowledgeCard({ category }) {
  const Icon = category.icon;

  return (
    <div
      className={`
        bg-[#F7FCFD]
        rounded-[6px]
        p-5
        sm:p-6
        lg:p-8
        transition-all
        duration-300
        hover:shadow-2xl
        hover:-translate-y-1
        ${
          category.id === 1
            ? "min-h-auto xl:min-h-[975px]"
            : category.id === 2
            ? "min-h-auto xl:min-h-[640px]"
            : "min-h-auto xl:min-h-[300px]"
        }
      `}
    >
      

      <div className="flex items-center gap-3 sm:gap-4 mb-6 lg:mb-8">
        <Icon
          size={24}
          className="text-[#35D5BC] shrink-0"
        />

        <h3
          className="
            text-[#354366]
            text-[17px]
            sm:text-[18px]
            lg:text-[20px]
            font-bold
            leading-tight
          "
        >
          {category.title}
        </h3>
      </div>

      

      <ul className="space-y-3 sm:space-y-4">
        {category.items.map((item, index) => {
          const isLast =
            index === category.items.length - 1;

          return (
            <li
              key={index}
              className="
                flex
                items-start
                gap-3
              "
            >
              {isLast ? (
                <>
                  <ChevronRight
                    size={16}
                    className="
                      mt-1
                      text-[#35D5BC]
                      shrink-0
                    "
                  />

                  <button
                    className="
                      text-[#35D5BC]
                      text-[14px]
                      sm:text-[15px]
                      font-medium
                      text-left
                      hover:underline
                    "
                  >
                    {item}
                  </button>
                </>
              ) : (
                <>
                  <span
                    className="
                      text-[#CFCFCF]
                      mt-[2px]
                      shrink-0
                    "
                  >
                    –
                  </span>

                  <span
                    className="
                      text-[#6E7C8D]
                      text-[14px]
                      sm:text-[15px]
                      leading-6
                      sm:leading-7
                    "
                  >
                    {item}
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default KnowledgeCard;