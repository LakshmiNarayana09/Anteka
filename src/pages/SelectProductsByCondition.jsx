import React from 'react'
import Navbar from '../components/navbar/Navbar'
import CategoryNav from '../components/category/CategoryNav'
import AlphabetSearch from '../components/alphabet-search/AlphabetSearch'
import KnowledgeBase from '../components/knowlegde-base/KnowledgeBase'
import HealthBlog from '../components/health-blog/HealthBlog'
import Footer from '../components/footer/Footer'

function SelectProductsByCondition() {
  return (
    <div>
      <Navbar />

      <CategoryNav />

      <AlphabetSearch />

      <KnowledgeBase />

      <HealthBlog />

      <Footer />
      
    </div>
  )
}

export default SelectProductsByCondition
