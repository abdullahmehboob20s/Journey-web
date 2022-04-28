import React from "react";
import TeamCard from "components/TeamCard";
import teamMemberImg from "assets/images/teamMemberImg.png";

function Team() {
  return (
    <div>
      <h1 className="text-white text-center font-bold text-[64px] mb-[50px]">
        THE TEAM
      </h1>

      <main className="grid grid-cols-3 gap-[27px]">
        <TeamCard img={teamMemberImg} title="Niros" subtitle="Creative Mind" />
        <TeamCard img={teamMemberImg} title="Niros" subtitle="Creative Mind" />
        <TeamCard img={teamMemberImg} title="Niros" subtitle="Creative Mind" />
      </main>
    </div>
  );
}

export default Team;
