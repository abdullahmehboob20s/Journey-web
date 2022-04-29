import React from "react";

function GuideCard({ title, img }) {
  return (
    <div className="bg-black pt-[30px] pb-[30px] xl:pb-[50px] px-[20px] text-center rounded-[14px] group">
      <img
        src={img}
        className="w-full aspect-video object-contain mb-[20px] xl:mb-[50px] select-none pointer-events-none"
        alt=""
      />
      <h1 className="text-white text-[18px] xl:text-[22px] font-bold text-center mb-6">
        {title}
      </h1>

      <div className="transition-all duration-[.3s] ease-[ease] overflow-hidden opacity-0 group-hover:opacity-[1]">
        <p className="">Lorem ipsum dolor sit amet consectetur,</p>
      </div>
    </div>
  );
}

export default GuideCard;
