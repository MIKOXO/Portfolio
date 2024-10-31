import React from "react";

const About = () => {
  return (
    <section name="About" className="py-14 px-4 mx-auto container">
      <div>
        <h1 className="text-center text-p1 text-5xl font-bold">About Me</h1>
      </div>
      <div className="mt-2 py-7 flex flex-col justify-between lg:py-10 lg:mt-16 lg:flex lg:flex-row">
        <div className="w-full lg:w-[60%]">
          <h1 className="text-center text-2xl leading-tight font-semibold text-p4 px-3 lg:px-0 sm:text-[36px] lg:w-[80%] lg:text-left">
            I'm Mikiyas, a Front-End Website developer based in Ethiopia. I
            really appreciate you for taking your time to visit my portfolio.
          </h1>
        </div>

        <div className="hidden lg:flex h-[300px] w-[0.5px] bg-s5" />

        <div className="ml-0 w-full mt-7 lg:mt-0 lg:ml-10 lg:w-[80%]">
          <h1 className="text-p5 text-base font-light tracking-wide text-center px-3 lg:px-0 sm:text-xl lg:text-left lg:w-[90%]">
            I specialize in building modern websites and web applications using
            the latest technologies, with a focus on delivering seamless and
            engaging user interfaces. passion for crafting clean, efficient code
            and designing intuitive user interfaces. With expertise in HTML,
            CSS, JavaScript, and React, I love transforming creative ideas into
            fully functional websites and applications. My focus is on creating
            responsive, high-performance digital experiences that are both
            visually appealing and user-centric. When I’m not coding, I’m
            constantly learning new tools and techniques to stay ahead in this
            ever-evolving field.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default About;
