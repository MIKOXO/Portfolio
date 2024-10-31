import React from "react";
import Work from "./Work";
import Netflix from "../assets/Net.png";
import Netflix2 from "../assets/Netflix2.jpg";
import Apple from "../assets/Apple-Logo.jpg";
import Manage from "../assets/Manage.png";
import EasyBank from "../assets/EasyBank.png";
import HooBank from "../assets/HooBank.png";

const Works = () => {
  return (
    <section name="Works" className="py-20 px-4 mx-auto container">
      <div>
        <h1 className="text-center text-p1 text-5xl font-bold">Projects</h1>
        <h2 className="text-center text-p5 text-base px-5 font-semibold my-10 sm:text-xl lg:px-0">
          Throughout my journey as a front-end web developer, I’ve had the
          opportunity to work on various projects, each helping me sharpen my
          skills and explore new technologies. Each of these projects has
          allowed me to solve real-world problems, work with responsive design
          principles, and apply best practices in web development. I'm always
          excited to take on new challenges and contribute to building
          innovative web solutions. Below are some of the projects that best
          reflect my ability to design and develop functional, responsive, and
          visually appealing websites.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <Work
          img={Netflix}
          title="Netflix Clone"
          description="This is a clone of Netflix Official Website. I used React and
              Tailwind CSS to build the website."
          link1="https://genuine-melba-732b6b.netlify.app/"
          link2="https://github.com/MIKOXO/Netflix-React"
        />
        <Work
          img={Apple}
          title="Apple Clone"
          description="This is a clone of Apple Official Website. I used React,
              Tailwind CSS and YouTube API to build the website."
          link1="https://flourishing-rabanadas-eda47d.netlify.app/"
          link2="https://github.com/MIKOXO/Apple-React"
        />
        <Work
          img={Manage}
          title="Manage Clone"
          description="This is a clone of Manage Landing page. I used HTML, Tailwind and Javascript to build the website."
          link1="https://manage0tailwind.netlify.app/"
          link2="https://github.com/MIKOXO/Manage"
        />
        <Work
          img={Netflix2}
          title="Netflix Clone"
          description="This is a clone of Netflix Official Website. I used HTML,
              Bootstrap and JQuery to build the website."
          link1="https://amazing-figolla-1d3042.netlify.app/"
          link2="https://github.com/MIKOXO/Netflix-Bootstrap"
        />
        <Work
          img={EasyBank}
          title="EasyBank Clone"
          description="This is a clone of EasyBank Landing Page. I used React and
              TailWind CSS to build the website."
          link1="https://react0easybank.netlify.app/"
          link2="https://github.com/MIKOXO/EasyBank-React"
        />
        <Work
          img={HooBank}
          title="HooBank Clone"
          description="This is a clone of HooBank Landing Page. I used React and
              TailWind CSS to build the website."
          link1="#"
          link2="https://github.com/MIKOXO/HooBank-React"
        />
      </div>
    </section>
  );
};

export default Works;
