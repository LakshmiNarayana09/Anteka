import React from 'react'
import Navbar from '../components/navbar/Navbar'
import CategoryNav from '../components/category/CategoryNav'
import Footer from '../components/footer/Footer'
import Certificates from '../components/pages/about/Certificates'

function LicensePage() {
  return (
    <div>

      <Navbar />

      <CategoryNav />

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
        <Certificates />
      </main>

      <Footer />
      
    </div>
  )
}

export default LicensePage
