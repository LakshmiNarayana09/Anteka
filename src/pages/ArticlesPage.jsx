import React from 'react'
import Navbar from '../components/navbar/Navbar'
import CategoryNav from '../components/category/CategoryNav'
import Breadcrumb from '../components/pages/Articles/Breadcrumb'
import HeroBanner from '../components/pages/Articles/HeroBanner'
import ArticleContent from '../components/pages/Articles/ArticleContent'
import Tags from '../components/pages/Articles/Tags'
import ShareButtons from '../components/pages/Articles/ShareButtons'
import Footer from '../components/footer/Footer'

function ArticlesPage() {
  return (
    <div>
      <>
        <Navbar />
        
        <CategoryNav />

        <Breadcrumb />

        <HeroBanner />

        <ArticleContent />

        <section className="max-w-4xl mx-auto px-4 lg:px-0 pb-20">
          <Tags />

          <ShareButtons />

        </section>

        <Footer />
      </>
    </div>
  )
}

export default ArticlesPage
