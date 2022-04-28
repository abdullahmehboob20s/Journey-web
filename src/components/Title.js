import React from "react";

function Title({ children, className }) {
  return (
    <h1
      className={`font-bold text-[40px] md:text-[54px] xl:text-[64px] ${className}`}
    >
      {children}
    </h1>
  );
}

export default Title;
