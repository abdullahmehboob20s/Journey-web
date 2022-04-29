import React from "react";

function GuideCard({ title, img }) {
  return (
    <div className="bg-black pt-[30px] pb-[30px] xl:pb-[50px] px-[20px] text-center rounded-[14px]">
      <img
        src={img}
        className="w-full aspect-video object-contain mb-[20px] xl:mb-[50px] select-none pointer-events-none"
        alt=""
      />
      <h1 className="text-white text-[18px] xl:text-[22px] font-bold text-center">
        {title}
      </h1>
    </div>
  );
}

export default GuideCard;
