import React from "react";

const Work = (prop) => {
  return (
    <div>
      <div className="mt-10 relative cursor-pointer">
        <img
          src={prop.img}
          className="block h-[300px] w-[100%] rounded-2xl shadow-200"
        />
        <div className="absolute right-0 bottom-0 top-0 left-0 bg-s2 h-full w-full rounded-xl transition-all transform translate-y-8 opacity-0 hover:opacity-100 hover:translate-y-0 ease-in-out duration-300">
          <div className="flex flex-col text-center justify-center items-center">
            <h1 className="mt-10 text-2xl text-p4 font-bold sm:text-3xl">
              {prop.title}
            </h1>
            <p className="mt-6 px-5 text-base text-p5 sm:text-lg">
              {prop.description}
            </p>
            <div className="flex flex-row items-center space-x-3 mt-5">
              <a
                target="_BLANK"
                href={prop.link1}
                className="text-p4 font-bold px-8 py-2 border-2 border-p5 rounded-3xl hover:shadow-500 hover:bg-s3 hover:border-s3 ease-in-out duration-300 sm:py-3"
              >
                DEMO
              </a>
              <a
                target="_BLANK"
                href={prop.link2}
                className="text-p4 font-bold px-8 py-2 border-2 border-p5 rounded-3xl hover:shadow-500 hover:bg-s3 hover:border-s3 ease-in-out duration-300 sm:py-3"
              >
                CODE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
