import React, { Children, useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

function Accordion({ title, children }) {
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
    <div className="max-w-[689px] w-full mx-auto bg-[rgba(255,_255,_255,_0.1)] rounded-[18px]">
      <button
        className="py-[38px] px-[42px] flex items-center justify-between w-full"
        onClick={() => setIsOpen((val) => !val)}
      >
        <p className="font-merienda text-2xl text-white font-normal">{title}</p>

        <span
          className={`${
            isOpen ? "rotate-[180deg]" : ""
          } transition-all duration-[.3s] ease-[ease]`}
        >
          <FiChevronDown size={40} color="white" />
        </span>
      </button>

      <div
        className="h-0 overflow-hidden transition-all duration-[.3s] ease-[ease]"
        ref={menuRef}
      >
        <div className="py-[38px] px-[42px] pt-0 ">{children}</div>
      </div>
    </div>
  );
}

export default Accordion;
