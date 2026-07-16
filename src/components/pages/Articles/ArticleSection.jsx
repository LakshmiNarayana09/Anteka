import React from "react";

const ArticleSection = ({ title, children }) => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl md:text-3xl font-bold text-[#243B6B] mb-5">
        {title}
      </h2>

      <div className="space-y-5 text-gray-600 leading-8">
        {children}
      </div>
    </section>
  );
};

export default ArticleSection;