import React from "react";

const Skill = (prop) => {
  return (
    <div className="my-5 mx-5 py-5 rounded-full text-p4 border-2 border-s3 hover:border-s4 ease-in-out duration-500 hover:shadow-500 hover:-translate-y-2 cursor-pointer">
      <h1 className="text-center text-xl tracking-wider font-bold text-p1 uppercase">
        {prop.text}
      </h1>
    </div>
  );
};

export default Skill;
