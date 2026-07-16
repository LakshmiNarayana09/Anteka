import React from 'react'
import Navbar from "../components/navbar/Navbar";
import CategoryNav from "../components/category/CategoryNav";
import Footer from "../components/footer/Footer";

import Breadcrumb from "../components/pages/cart/Breadcrumb";
import PageTitle from "../components/pages/cart/PageTitle";
import QuestionSection from "../components/pages/about/QuestionSection";

import CartList from "../components/pages/cart/CartList";
import CartSummary from "../components/pages/cart/CartSummary";
import PromoCode from "../components/pages/cart/PromoCode";
import RecommendedProducts from "../components/pages/cart/RecommendedProducts";
import FeatureSection from "../components/pages/cart/FeatureSection";

function CartPage() {
  return (
    <>
      <Navbar />

      <CategoryNav />

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8">

        <Breadcrumb />

        <PageTitle title="Shopping Cart" />

        <div className="mt-8 grid lg:grid-cols-[1fr_330px] gap-8">

          <CartList />

          <div className="space-y-6">

            <CartSummary />

            <PromoCode />

          </div>

        </div>

        <RecommendedProducts />

        <FeatureSection />

        <QuestionSection />

      </main>

      <Footer />
    </>
  )
}

export default CartPage
