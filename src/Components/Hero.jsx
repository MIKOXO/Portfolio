import React from "react";
import Profile from "../assets/Miki.jpg";
import Button from "../Constants/Button";

const Hero = () => {
  return (
    <section className="my-24 mx-auto container px-4 sm:mt-10">
      <div className="flex flex-col items-center">
        <div className="py-4">
          <img
            src={Profile}
            className=" sm:mr-10 w-[180px] rounded-[100%] shadow-500 cursor-pointer"
          />
        </div>
        <div className="mt-5 text-center">
          <h1 className="text-p4 text-2xl font-bold tracking-wide px-6 lg:px-20 sm:text-5xl">
            Hey there I'm Mikiyas, a Front-End Web Developer based in Ethiopia
          </h1>
          <p className="text-p5 text-base my-5 px-5 lg:px-32 sm:text-xl">
            I'm a passionate front-end web developer with a keen eye for design
            and a love for creating responsive, user-friendly web experiences.
          </p>
        </div>
        <div className="my- flex">
          <Button />
        </div>
      </div>
    </section>
  );
};

export default Hero;
