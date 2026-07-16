import React from 'react'
import Breadcrumb from '../components/pages/products/Breadcrumb'
import ProductHeader from '../components/pages/products/ProductHeader'
import ProductTabs from '../components/pages/products/ProductTabs'
import ProductGallery from '../components/pages/products/ProductGalaery'
import ProductInfo from '../components/pages/products/ProductInfo'
import Navbar from '../components/navbar/Navbar'
import CategoryNav from '../components/category/CategoryNav'
import Footer from '../components/footer/Footer'
import Products from '../components/products/Products'
import AboutCompany from '../components/about-company/AboutCompany'
import HealthBlog from '../components/health-blog/HealthBlog'
import PriceCard from '../components/pages/products/PriceCard'


function ProductDetails() {
  return (
    <>
      <Navbar />

      <CategoryNav />

      <Breadcrumb />

      <ProductHeader />

      <ProductTabs />

      <section className="max-w-7xl mx-auto px-4 lg:px-8 mt-8">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          
          <div className="lg:col-span-1">
            <ProductGallery />
          </div>

          
          <div className="lg:col-span-1">
            <ProductInfo />
          </div>

          
          <div>
            
            <PriceCard />
          </div>

        </div>

      </section>

      <Products />

      <Products reverse />

      <AboutCompany title="SEO" />

      <HealthBlog />
      
      <Footer />

    </>
  )
}

export default ProductDetails
