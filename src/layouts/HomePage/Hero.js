import React from "react";
import img from "assets/images/hero-bg.png";
import Button from "components/Button";

function Hero() {
  return (
    <div className="relative">
      <img
        src={img}
        className="absolute inset-0 h-full z-[-4] opacity-[.2] select-none"
        alt=""
      />
      <div className="h-screen container flex flex-col items-center justify-center">
        <div className="max-w-[809.02px] w-full text-center">
          <h1 className="text-white text-center leading-[90px] tracking-[-2px] mb-6 font-bold text-[64px] ">
            About <br /> The Journey
          </h1>

          <p className="font-dm-sans text-center text-[22px] font-normal mb-16">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <Button title="Get Started" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
