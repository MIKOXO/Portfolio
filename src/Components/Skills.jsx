import React from "react";
import Skill from "./Skill";

const Skills = () => {
  return (
    <section name="Skill" className="py-14 px-4 mx-auto container">
      <div>
        <h1 className="text-center text-p1 text-5xl font-bold">Skills</h1>
      </div>
      <div className="py-10 px-4 mt-16 border-2 border-s3 shadow-500 rounded-2xl">
        <div className="grid grid-cols-1 gap-5 lg:grid lg:grid-cols-4">
          <Skill text="HTML" />
          <Skill text="CSS" />
          <Skill text="JavaScript" />
          <Skill text="JQuery" />
          <Skill text="React" />
          <Skill text="Tailwind" />
          <Skill text="Bootstrap" />
          <Skill text="Git & Github" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
