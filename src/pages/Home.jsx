import React from 'react'
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero"
import Benefits from "../components/benefits/Benefits";
import Products from '../components/products/Products'
import DealOfMonth from "../components/deal-of-month/DealOfMonth";
import HowWeWork from "../components/how-we-work/HowWeWork";
import Reviews from "../components/reviews/Reviews";
import AboutCompany from "../components/about-company/AboutCompany";
import AlphabetSearch from "../components/alphabet-search/AlphabetSearch"
import KnowledgeBase from "../components/knowlegde-base/KnowledgeBase"
import HealthBlog from "../components/health-blog/HealthBlog";
import Footer from "../components/footer/Footer"
import CategoryNav from '../components/category/CategoryNav';

function Home() {
  return (
    <div>

      <Navbar />

      <CategoryNav />

      <Hero />

      <Benefits />

      <DealOfMonth />

      <HowWeWork />

      <Reviews />

      <AboutCompany title="About the Company" />

      <AlphabetSearch />

      <KnowledgeBase />

      <HealthBlog />

      <Footer />
      
    </div>
  )
}

export default Home
