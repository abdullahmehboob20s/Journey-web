import React from "react";
import aboutPattren from "assets/images/about-pattren.png";
import AboutCard from "components/AboutCard";

function About() {
  return (
    <div className="py-[82px] relative">
      <img
        src={aboutPattren}
        className="absolute left-0 top-0 h-full object-cover z-[-2]"
        alt=""
      />
      <div className="container">
        <header className="max-w-[645px] w-full text-center mx-auto mb-[82px]">
          <h1 className="text-white text-center leading-[90px] tracking-[-2px] mb-[5px] font-bold text-[64px] ">
            About The Journey
          </h1>

          <p className="font-dm-sans text-center text-[22px] font-normal mb-16 text-white opacity-[.5]">
            BiLorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum
          </p>
        </header>

        <h1 className="text-white text-center font-bold text-[50px] mb-14 ">
          How its Work
        </h1>

        <main className="grid grid-cols-[repeat(3,_250px)] justify-between gap-[2rem] max-w-[1050px] mx-auto">
          <AboutCard
            title="Share your journey"
            desc="Lorem Ipsum is simply dummy text of the printing and typese "
            index="1"
          />
          <AboutCard
            title="Create image/video"
            desc="Lorem Ipsum is simply dummy text of the printing and typese "
            index="2"
          />
          <AboutCard
            title="Mint your NFT"
            desc="Lorem Ipsum is simply dummy text of the printing and typese "
            index="3"
          />
        </main>
      </div>
    </div>
  );
}

export default About;
