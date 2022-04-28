import React from "react";

function Button({
  title,
  radius = "rounded-[20px]",
  padding = "py-[28px] px-[46px]",
}) {
  return (
    <button
      className={`font-orbitron text-[#EFEFEF] text-base font-black  ${radius} ${padding} bg-text-gradient`}
    >
      {title}
    </button>
  );
}

export default Button;
