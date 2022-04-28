import Accordion from "components/Accordion";
import React from "react";

function Faq() {
  return (
    <div className="py-[100px]">
      <div className="container">
        <h1 className="text-white text-center font-bold text-[64px] mb-[50px] leading-normal">
          Frequently Asked <br /> Questions
        </h1>

        <main>
          <Accordion />
        </main>
      </div>
    </div>
  );
}

export default Faq;
