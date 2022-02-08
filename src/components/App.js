// import React from "react";
// import "../styles/App.css";
// import Header from "./Header";
// import SectionOne from "./Homepage/SectionOne";
// import EmPower from "./Homepage/EmPower";
// import OnePlatform from "./Homepage/OnePlatform";
// import AnimatedBenefitsShowCase from "./AnimatedBenefitsShowcase";
// import BuildYourWebsite from "./Homepage/BuildYourWebsite";
// import Resources from "./Homepage/Resources";
// import MakeYourBusiness from "./Homepage/MakeYourBusiness";
// import Search from "./Api/Search";
// import Footer from "./Footer";

// function App() {
//   return (
//     <div>
//       <Header />
//       <SectionOne />
//       <Search />
//       <EmPower />
//       {/* <OnePlatform /> */}
//       <AnimatedBenefitsShowCase />
//       <BuildYourWebsite />
//       <Resources />
//       <MakeYourBusiness />
//       <Footer />
//     </div>
//   );
// }

// export default App;
import React from "react";
import "../styles/App.css";
import Homepage from "./Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
