import Accordion from "components/Accordion";
import React from "react";

function Faq() {
  return (
    <div className="py-[50px] pb-0">
      <div className="container bg-[#0F172A] py-[86px] rounded-tl-[54px] rounded-tr-[54px]">
        <h1 className="text-white text-center font-bold text-[64px] mb-[50px] leading-normal">
          Frequently Asked <br /> Questions
        </h1>

        <main className="space-y-6">
          <Accordion title="How Can I Buy a The Journey NFT?">
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur eveniet deserunt nulla, nostrum aliquid, sunt
              deleniti suscipit qui delectus dignissimos doloribus voluptatum
              impedit officiis illum distinctio recusandae sequi, a quaerat?
            </p>
          </Accordion>
          <Accordion title="How Can I Buy a The Journey NFT?">
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur eveniet deserunt nulla, nostrum aliquid, sunt
              deleniti suscipit qui delectus dignissimos doloribus voluptatum
              impedit officiis illum distinctio recusandae sequi, a quaerat?
            </p>
          </Accordion>
          <Accordion title="How Can I Buy a The Journey NFT?">
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur eveniet deserunt nulla, nostrum aliquid, sunt
              deleniti suscipit qui delectus dignissimos doloribus voluptatum
              impedit officiis illum distinctio recusandae sequi, a quaerat?
            </p>
          </Accordion>
          <Accordion title="How Can I Buy a The Journey NFT?">
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur eveniet deserunt nulla, nostrum aliquid, sunt
              deleniti suscipit qui delectus dignissimos doloribus voluptatum
              impedit officiis illum distinctio recusandae sequi, a quaerat?
            </p>
          </Accordion>
        </main>
      </div>
    </div>
  );
}

export default Faq;
