import React from 'react'
import Navbar from "../components/navbar/Navbar";
import CategoryNav from "../components/category/CategoryNav";
import Footer from "../components/footer/Footer";
import Breadcrumb from "../components/pages/reviews/Breadcrumb";
import PageTitle from "../components/pages/reviews/PageTitle";
import RatingSummary from "../components/pages/reviews/RatingSummary";
import ReviewsList from "../components/pages/reviews/ReviewsList";
import Pagination from "../components/pages/reviews/Pagination";
import ReviewForm from '../components/pages/reviews/ReviewForm'
import QuestionSection from '../components/pages/reviews/QuestionSection'

function Reviews() {
  return (
    
      <>
        <Navbar />

        <CategoryNav />

        <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8">

          <Breadcrumb />

          <PageTitle />

          <div className="mt-8 grid lg:grid-cols-[300px_1fr] gap-8">

            <RatingSummary />

            <div>
              <ReviewsList />

              <Pagination />
            </div>

          </div>

          <ReviewForm />

          <QuestionSection />

        </main>

        <Footer />
      </>

  )
}

export default Reviews
