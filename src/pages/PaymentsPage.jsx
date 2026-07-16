import React from "react";

import Navbar from "../components/navbar/Navbar";
import CategoryNav from "../components/category/CategoryNav";
import Footer from "../components/footer/Footer";

import Breadcrumb from "../components/pages/payments/Breadcrumb";
import PageTitle from "../components/pages/payments/PageTitle";

import PaymentMethods from "../components/pages/payments/PaymentMethods";
import PaymentInfo from "../components/pages/payments/PaymentInfo";
import OnlinePayment from "../components/pages/payments/OnlinePayment";
import SecuritySection from "../components/pages/payments/SecuritySection";
import RefundPolicy from "../components/pages/payments/RefundPolicy";
import NoticeBox from "../components/pages/payments/NoticeBox";
import QuestionSection from "../components/pages/about/QuestionSection";
import PrescriptionSection from "../components/pages/payments/PrescriptionSection";

function PaymentsPage() {
  return (
    <>
      <Navbar />

      <CategoryNav />

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8">

        <Breadcrumb />

        <PageTitle />
        <PrescriptionSection />

        <PaymentMethods />

        <PaymentInfo />

        <OnlinePayment />

        <SecuritySection />

        <RefundPolicy />

        <NoticeBox />

        <QuestionSection />

      </main>

      <Footer />
    </>
  );
}

export default PaymentsPage;