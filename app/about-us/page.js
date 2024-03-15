import AboutUsHero from "@/components/AboutUsHero";
import Green from "@/components/Green";
import Header from "@/components/Header";
import SmallFooter from "@/components/SmallFooter";
import Team from "@/components/Team";
import React from "react";

function AboutUs() {
  return (
    <div className="montserrat">
      <Header />
      <AboutUsHero />
      <Team />
      <Green />
      <SmallFooter />
    </div>
  );
}

export default AboutUs;
