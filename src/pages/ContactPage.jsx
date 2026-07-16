import React from 'react'
import Navbar from "../components/navbar/Navbar";
import CategoryNav from "../components/category/CategoryNav";
import Footer from "../components/footer/Footer";

import Breadcrumb from "../components/pages/contact/Breadcrumb";
import PageTitle from "../components/pages/contact/PageTitle";
import QuestionSection from "../components/pages/about/QuestionSection";

import ContactInfo from "../components/pages/contact/ContactInfo";
import ContactForm from "../components/pages/contact/ContactForm";
import ContactMap from "../components/pages/contact/ContactMap";
import PartnerSection from "../components/pages/contact/PartnerSection";

function ContactPage() {
  return (
    <>
      <Navbar />

      <CategoryNav />

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8">

        <Breadcrumb />

        <PageTitle title="Contact Us" />

        <div className="mt-8 grid lg:grid-cols-[1fr_380px] gap-8">
          <ContactInfo />
          <ContactForm />
        </div>

        <ContactMap />

        <PartnerSection />

        <QuestionSection />

      </main>

      <Footer />
      
    </>
  )
}

export default ContactPage
