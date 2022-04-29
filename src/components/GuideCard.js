import React, { useEffect, useRef, useState } from "react";

function GuideCard({ title, img }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      menuRef.current.style.height = menuRef.current.scrollHeight + "px";
    } else {
      menuRef.current.style.height = 0 + "px";
    }
  }, [isOpen]);

  return (
    <div
      className="bg-black pt-[30px] pb-[30px] xl:pb-[50px] px-[20px] text-center rounded-[14px] group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <img
        src={img}
        className="w-full aspect-video object-contain mb-[20px] xl:mb-[50px] select-none pointer-events-none"
        alt=""
      />
      <h1 className="text-white text-[18px] xl:text-[22px] font-bold text-center mb-6">
        {title}
      </h1>

      <div
        ref={menuRef}
        className="h-0 overflow-hidden transition-all duration-[.3s] ease-[ease]"
      >
        <p className="">Lorem ipsum dolor sit amet consectetur,</p>
      </div>
    </div>
  );
}

export default GuideCard;
