import GuideCard from "components/GuideCard";
import React from "react";
import img1 from "assets/images/guide-img-1.svg";
import img2 from "assets/images/guide-img-2.svg";
import img3 from "assets/images/guide-img-3.svg";
import img4 from "assets/images/guide-img-4.svg";
import img5 from "assets/images/guide-img-5.svg";
import img6 from "assets/images/guide-img-6.svg";
import img7 from "assets/images/guide-img-7.svg";
import img8 from "assets/images/guide-img-8.svg";
import img9 from "assets/images/guide-img-9.svg";
import img10 from "assets/images/guide-img-10.svg";
import img11 from "assets/images/guide-img-11.svg";
import img12 from "assets/images/guide-img-12.svg";
import img13 from "assets/images/guide-img-13.svg";
import img14 from "assets/images/guide-img-14.svg";
import img15 from "assets/images/guide-img-15.svg";
import img16 from "assets/images/guide-img-16.svg";
import img17 from "assets/images/guide-img-17.svg";
import img18 from "assets/images/guide-img-18.svg";
import img19 from "assets/images/guide-img-19.svg";
import img20 from "assets/images/guide-img-20.svg";

function Guides() {
  return (
    <div className="py-[100px]">
      <div className="container">
        <h1 className="text-white text-center font-bold text-[64px] mb-[76px]">
          PSYCHEDELIC GUIDES
        </h1>

        <main className="grid grid-cols-[repeat(4,_1fr)] gap-7">
          <GuideCard img={img1} title="2C-B" />
          <GuideCard img={img2} title="4-Aco-DMT" />
          <GuideCard img={img3} title="5-MEO-DMT" />
          <GuideCard img={img4} title="AMANITA MUSCARIA" />

          <GuideCard img={img5} title="AYAHUASCA" />
          <GuideCard img={img6} title="CACAO" />
          <GuideCard img={img7} title="CANNABIS" />
          <GuideCard img={img8} title="DATURA" />

          <GuideCard img={img9} title="DMT" />
          <GuideCard img={img10} title="IBOGAINE" />
          <GuideCard img={img11} title="KAMBO" />
          <GuideCard img={img12} title="KETAMINE" />

          <GuideCard img={img13} title="KRATOM" />
          <GuideCard img={img14} title="LSD" />
          <GuideCard img={img15} title="MDMA" />
          <GuideCard img={img16} title="MESCALINE" />

          <GuideCard img={img17} title="PEYOTE" />
          <GuideCard img={img18} title="SALVIA" />
          <GuideCard img={img19} title="SAN PEDRO" />
          <GuideCard img={img20} title="PSILOCYBIN MUSHROOMS" />
        </main>
      </div>
    </div>
  );
}

export default Guides;
