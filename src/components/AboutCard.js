import React from "react";

const AboutCard = ({ title, desc, index }) => {
  return (
    <div className="text-center flex flex-col items-center">
      <div className="w-[111px] h-[111px] rounded-full  flex justify-center items-center text-[35px] font-bold bg-[rgba(0,_0,_0,_0.37)] mb-[22px]">
        {index}
      </div>

      <h1 className="text-white text-center text-[22px] font-bold mb-[20px] ">
        {title}
      </h1>

      <p className="font-dm-sans text-center text-[16px] font-normal text-white opacity-[.5]">
        {desc}
      </p>
    </div>
  );
};
export default AboutCard;
