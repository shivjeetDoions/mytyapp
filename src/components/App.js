import React from "react";
import "../styles/App.css";
import Header from "./Header";
import SectionOne from "./Homepage/SectionOne";
import EmPower from "./Homepage/EmPower";
import OnePlatform from "./Homepage/OnePlatform";
import BuildYourWebsite from "./Homepage/BuildYourWebsite";
import Resources from "./Homepage/Resources";
import MakeYourBusiness from "./Homepage/MakeYourBusiness";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <SectionOne />
      <EmPower />
      <OnePlatform />
      <BuildYourWebsite />
      <Resources />
      <MakeYourBusiness />
      <Footer />
    </div>
  );
}

export default App;
