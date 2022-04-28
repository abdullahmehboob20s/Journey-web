import SocialIcon from "components/SocialIcon";
import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import daimond from "assets/icons/daimond.svg";

function Footer() {
  return (
    <div className="bg-[#0F172A] pb-8">
      <div className="container py-12 mb-8 flex items-center justify-between">
        <h1 className="font-merienda text-[50px] font-bold">
          The
          <span className="font-merienda font-bold pl-4 text-gradient">
            journey
          </span>
        </h1>

        <div className="flex space-x-[44px] items-center">
          <div className="flex space-x-[32px] items-center">
            <p className="text-[18px] text-gradient font-[800] uppercase cursor-pointer">
              Home
            </p>
            <p className="text-[18px] text-[#BCBCBC] font-[500] uppercase cursor-pointer">
              Launchpad
            </p>
            <p className="text-[18px] text-[#BCBCBC] font-[500] uppercase cursor-pointer">
              Studio
            </p>
            <p className="text-[18px] text-[#BCBCBC] font-[500] uppercase cursor-pointer">
              Labs
            </p>
          </div>

          <div className="flex items-center space-x-[8px] ">
            <SocialIcon icon={<ImFacebook style={{ fill: "black" }} />} />
            <SocialIcon icon={<FaTwitter style={{ fill: "black" }} />} />
            <SocialIcon icon={<img src={daimond} alt="" />} />
          </div>
        </div>
      </div>
      <p className="text-center text-lg text-white">Copyright © 2020</p>
    </div>
  );
}

export default Footer;
