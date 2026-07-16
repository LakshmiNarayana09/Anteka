import React from "react";

function BlogCard({ blog }) {

  const {
    id,
    image,
    title,
    description,
    date,
    category,
  } = blog;

  return (
    <article
      className="
        group
        flex
        flex-col
        cursor-pointer
        w-full
      "
    >
      

      <div
        className="
          overflow-hidden
          rounded-[6px]
        "
      >
        <img
          src={image}
          alt={title}
          className="
            w-full
            h-[200px]
            sm:h-[220px]
            lg:h-[230px]
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      

      <div className="pt-5 sm:pt-6">
        

        <div
          className="
            flex
            flex-wrap
            items-center
            gap-x-3
            gap-y-1
            text-[12px]
            sm:text-[13px]
            font-medium
          "
        >
          <span className="text-[#35D5BC]">
            {category}
          </span>

          <span className="text-[#A5A5A5]">
            •
          </span>

          <span className="text-[#9AA4AF]">
            {date}
          </span>
        </div>

        

        <h3
          className="
            mt-3
            sm:mt-4
            text-[#2F3B52]
            text-[22px]
            sm:text-[24px]
            lg:text-[28px]
            font-bold
            leading-tight
            transition-colors
            duration-300
            group-hover:text-[#35D5BC]
          "
        >
          {title}
        </h3>


        <p
          className="
            mt-3
            sm:mt-4
            text-[#6F7D8E]
            text-[15px]
            sm:text-[16px]
            leading-7
            sm:leading-8
          "
        >
          {description}
        </p>
      </div>
    </article>
  );
}

export default BlogCard;