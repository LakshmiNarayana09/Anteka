import React from "react";
import Navbar from "../components/navbar/Navbar";
import CategoryNav from "../components/category/CategoryNav";
import Footer from "../components/footer/Footer";
import Breadcrumb from "../components/pages/about/Breadcrumb";
import PageTitle from "../components/pages/about/PageTitle";
import QuestionSection from '../components/pages/reviews/QuestionSection'
import AboutIntro from '../components/pages/about/AboutIntro'
import Features from '../components/pages/about/Features'
import CompanyHistory from '../components/pages/about/CompanyHistory'
import Statistics from '../components/pages/about/Statistics'
import Certificates from '../components/pages/about/Certificates'
import Benefits from "../components/benefits/Benefits";


const AboutPage = () => {
  return (
    <>
      <Navbar />
      
      <CategoryNav />

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8">

        <Breadcrumb />

        <PageTitle />

        <AboutIntro />

        <Benefits />

        <Features />

        <CompanyHistory />

        <Statistics />

        <Certificates />

        <QuestionSection />

      </main>

      <Footer />
    </>
  );
};

export default AboutPage;