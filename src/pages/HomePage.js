import React from "react";
import Navbar from "layouts/Navbar";
import Hero from "layouts/HomePage/Hero";
import About from "layouts/HomePage/About";
import GetStarted from "layouts/HomePage/GetStarted";
import Guides from "layouts/HomePage/Guides";
import FormAndTeam from "layouts/HomePage/FormAndTeam";
import Faq from "layouts/HomePage/Faq";
import Footer from "layouts/Footer";
import blobHero from "assets/images/blob-hero.png";

function HomePage() {
  return (
    <div>
      <div className="relative">
        <img src={blobHero} className="absolute top-0 left-0 z-[-1]" alt="" />
        <Navbar />
        <Hero />
      </div>
      <About />
      <GetStarted />
      <Guides />
      <FormAndTeam />
      <Faq />
      <Footer />
    </div>
  );
}

export default HomePage;
