import React from "react";
import Footer from "./Footer";
import BuildYourWebsite from "./Homepage/BuildYourWebsite";
import EmPower from "./Homepage/EmPower";
import MakeYourBusiness from "./Homepage/MakeYourBusiness";
import OnePlatform from "./Homepage/OnePlatform";
import Resources from "./Homepage/Resources";
import SectionOne from "./Homepage/SectionOne";
import Search from "./Api/Search";
import AnimatedSection from "./AnimatedSection";
import AnimatedBenefitsShowcase from "./AnimatedBenefitsShowcase";
import Header from "./Header";
function Homepage() {
  return (
    <div>
      <Header />
      <SectionOne />
      <EmPower />
      <Search />
      <OnePlatform />
      <AnimatedSection />
      <AnimatedBenefitsShowcase />
      <BuildYourWebsite />
      <Resources />
      <MakeYourBusiness />
      <Footer />
    </div>
  );
}

export default Homepage;
