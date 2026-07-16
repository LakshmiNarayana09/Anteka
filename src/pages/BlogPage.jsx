import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../components/health-blog/blogData.js";
import Navbar from "../components/navbar/Navbar.jsx";
import Breadcrumb from "../components/pages/blog/Breadcrumb.jsx";
import HealthBlog from "../components/health-blog/HealthBlog.jsx"
import BlogGrid from "../components/pages/blog/BlogGrid.jsx";
import Pagination from "../components/pages/blog/Pagination.jsx";
import Footer from "../components/footer/Footer.jsx";

function BlogPage() {
  const { id } = useParams();

  const blog = blogData.find(
    (item) => item.id === Number(id)
  );

  if (!blog) {
    return (
      <h1 className="text-center py-20">
        Blog not found
      </h1>
    );
  }

  return (
    <>
      <Navbar />

      <main className="bg-[#F8F9FB] min-h-screen">

        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">

          <Breadcrumb />

          <h1 className="text-4xl font-bold text-[#394045] mt-4">
            HealthBlog
          </h1>

          <BlogGrid />

          <BlogGrid />

          <BlogGrid />

          <Pagination />

        </div>
        
      </main>

      <Footer />
    </>
  );
}

export default BlogPage;