import React from "react";

import Navbar from "../components/navbar/Navbar";
import CategoryNav from "../components/category/CategoryNav";
import Footer from "../components/footer/Footer";

import Breadcrumb from "../components/pages/delivery/Breadcrumb";
import PageTitle from "../components/pages/delivery/PageTitle";

import DeliveryInfo from "../components/pages/delivery/DeliveryInfo";
import FeatureCards from "../components/pages/delivery/FeatureCards";
import DeliverySteps from "../components/pages/delivery/DeliverySteps";
import PaymentMethods from "../components/pages/delivery/PaymentMethods";
import PickupInfo from "../components/pages/delivery/PickupInfo";
import BranchLocations from "../components/pages/delivery/BranchLocations";
import FAQ from "../components/pages/delivery/FAQ";

function DeliveryPickupPage() {
  return (
    <>
      <Navbar />

      <CategoryNav />

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8">

        <Breadcrumb
          items={[
            { label: "Delivery & Pickup" }
          ]}
        />

        <PageTitle title="Delivery & Pickup" />

        <DeliveryInfo />

        <FeatureCards />

        <DeliverySteps />

        <PaymentMethods />

        <PickupInfo />

        <BranchLocations />

        <FAQ />

      </main>

      <Footer />
    </>
  );
}

export default DeliveryPickupPage;