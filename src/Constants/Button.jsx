import React from "react";
import icon from "../assets/zap.svg";
import { Marker } from "./Marker";
import { Link } from "react-scroll";

const Button = (MarkerFill) => {
  const Inner = () => (
    <>
      <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        <span className="absolute -left-[1px]">
          <Marker markerFill={MarkerFill} />
        </span>
        {icon && (
          <img
            src={icon}
            alt="circle"
            className="size-10 mr-5 object-contain z-10"
          />
        )}
        <span className="relative z-2 font-bold text-p1 uppercase">
          More About Me
        </span>
      </span>

      <span className="glow-before glow-after" />
    </>
  );

  return (
    <a className="relative p-0.5 g5 rounded-2xl shadow-500 group">
      <Link
        to="About"
        spy={true}
        smooth={true}
        offset={50}
        // duration={500}
        className="links cursor-pointer"
      >
        <Inner />
      </Link>
    </a>
  );
};

export default Button;
