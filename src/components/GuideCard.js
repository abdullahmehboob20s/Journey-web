import React from "react";

function GuideCard({ title, img }) {
  return (
    <div className="bg-black py-[20px] pb-[50px] px-[20px] text-center rounded-[14px]">
      <img
        src={img}
        className="w-full h-[215px] object-contain mb-[50px] select-none pointer-events-none"
        alt=""
      />
      <h1 className="text-white text-[26px] font-bold text-center">{title}</h1>
    </div>
  );
}

export default GuideCard;
