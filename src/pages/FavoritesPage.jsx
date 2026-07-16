import React from 'react'
import Navbar from '../components/navbar/Navbar'
import CategoryNav from '../components/category/CategoryNav'
import Products from '../components/products/Products'
import Benefits from '../components/benefits/Benefits'
import Footer from '../components/footer/Footer'

function Favoraties() {
  return (
    <div>

      <Navbar />

      <CategoryNav />

      <div className="m-[50px]">
        <Products />
        <Products reverse />
        <Products />  
      </div>

      <Benefits />

      <Footer />
      
    </div>
  )
}

export default Favoraties
