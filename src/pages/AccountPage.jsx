import React from 'react'
import Navbar from "../components/navbar/Navbar";
import CategoryNav from "../components/category/CategoryNav";
import Footer from "../components/footer/Footer";

import Breadcrumb from "../components/pages/profile/Breadcrumb";
import PageTitle from "../components/pages/profile/PageTitle";
import QuestionSection from "../components/pages/about/QuestionSection";

import ProfileSidebar from "../components/pages/profile/ProfileSidebar";
import ProfileForm from "../components/pages/profile/ProfileForm";
import OrderHistory from "../components/pages/profile/OrderHistory";
import FeedbackForm from "../components/pages/profile/FeedbackForm";

function AccountPage() {
  return (
    <>
      <Navbar />

      <CategoryNav />

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8">

        <Breadcrumb />

        <PageTitle />

        <div className="mt-8 flex flex-col lg:flex-row gap-8">

          <ProfileSidebar />

          <div className="flex-1 space-y-10">

            <ProfileForm />

            <OrderHistory />

            <FeedbackForm />

          </div>

        </div>

        <QuestionSection />

      </main>

      <Footer />
    </>
  )
}

export default AccountPage
