import React from "react";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-[100]">
      <div className="container py-7 flex items-center justify-between">
        <h1 className="font-merienda text-[50px] font-bold">
          The
          <span className="font-merienda font-bold pl-4 text-gradient">
            journey
          </span>
        </h1>

        <div className="flex space-x-[100px] items-center">
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

          <div className="flex items-center space-x-[32px]">
            <button className="cursor-pointer py-[12px] px-[36px] rounded-[10px] border-[1px] border-solid border-[#D7D7D7]">
              <p className="text-[18px] text-[#BCBCBC] font-[500] uppercase ">
                create
              </p>
            </button>

            <p className="text-[18px] text-[#BCBCBC] font-[500] uppercase cursor-pointer">
              sign in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
