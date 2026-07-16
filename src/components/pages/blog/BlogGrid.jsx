import React from "react";
import BlogCard from "../../health-blog/BlogCard";
import blogData from "../../health-blog/blogData";

const BlogGrid = () => {

    const allBlogs = [
    ...blogData,
    ...blogData,
    ...blogData,
    ...blogData,
  ];
  
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

        
        <div className="lg:col-span-2">
            <BlogCard blog={allBlogs[0]} featured />
        </div>

        
        <BlogCard blog={allBlogs[1]} />
        <BlogCard blog={allBlogs[2]} />

        
        {allBlogs.slice(3).map((blog, index) => (
            <BlogCard key={index} blog={blog} />
        ))}

      </div>
    </div>
  );
};

export default BlogGrid;