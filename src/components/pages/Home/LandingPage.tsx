import React from "react";
import HomeLandingPageSectionOne from "./HomeLandingPageSectionOne";
import HomeLandingGetStartSection from "./HomeLandingGetStartSection";

function LandingPage() {
  return (
    <div className="flex flex-col">
      <HomeLandingPageSectionOne />
      <HomeLandingGetStartSection />
    </div>
  );
}

export default LandingPage;
