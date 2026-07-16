import React from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import blogData from "./blogData";
import BlogCard from "./BlogCard";

function HealthBlog() {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-12 sm:py-14 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-5
            mb-8
            md:mb-10
            lg:mb-12
          "
        >
          

          <h2
            className="
              text-[#22335C]
              text-[28px]
              sm:text-[32px]
              md:text-[40px]
              lg:text-[52px]
              font-bold
              leading-tight
            "
          >
            Health Blog
          </h2>

          

          <button
            onClick={() => navigate("/articles")}
            className="
              inline-flex
              items-center
              gap-2
              self-start
              md:self-auto
              text-[#35D5BC]
              text-[16px]
              sm:text-[17px]
              lg:text-[18px]
              font-semibold
              transition-all
              duration-300
              hover:gap-3
            "
          >
            <ChevronRight
              size={20}
              strokeWidth={3}
              className="shrink-0"
            />
            Latest Articles
          </button>
        </div>

        

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-6
            md:gap-8
          "
        >
          {blogData.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HealthBlog;