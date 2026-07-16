import React from 'react'
import Navbar from '../components/navbar/Navbar'
import CategoryNav from '../components/category/CategoryNav'
import AboutCompany from '../components/about-company/AboutCompany'
import HealthBlog from '../components/health-blog/HealthBlog'
import Footer from '../components/footer/Footer'
import Products from '../components/products/Products'
import { useParams } from "react-router-dom";
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import PageTitle from '../components/breadcrumb/PageTitle'
import Sidebar from '../components/breadcrumb/Sidebar'
import ProductsHeader from '../components/breadcrumb/ProductsHeader'


function CategoryPage() {
  const { slug } = useParams();
  
  return (
    <div>

      <Navbar />

      <CategoryNav />

      <Breadcrumb />

      <PageTitle />

      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-8">

        <div className="flex flex-col lg:flex-row gap-8">

          <Sidebar />

          <div className="flex-1 space-y-8">

            <ProductsHeader />

            <div className="mt-6">
              <Products />
            </div>

          </div>

        </div>

      </section>

      <Products />

      <Products reverse />

      <AboutCompany title="SEO" />

      <HealthBlog />

      <Footer />
      
    </div>
  )
}

export default CategoryPage
