import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
import Logo from "../assets/Logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mx-auto container px-4 py-7">
      <div className="text-p4 text-2xl font-bold uppercase hidden justify-between items-center lg:flex lg:flex-row xl:text-3xl">
        <div className="space-x-14 ml-5 py-2 px-4">
          <Link
            to="About"
            spy={true}
            smooth={true}
            offset={0}
            // duration={500}
            className="links cursor-pointer"
          >
            About
          </Link>

          <div className="dot inline-block align-middle" />

          <Link
            to="Skill"
            spy={true}
            smooth={true}
            offset={5}
            duration={2000}
            className="links cursor-pointer"
          >
            Skill
          </Link>
        </div>
        <div>
          <img src={Logo} width={200} className="cursor-pointer ml-10" />
        </div>
        <div className="space-x-12 mr-5 py-2 px-4">
          <Link
            to="Works"
            spy={true}
            smooth={true}
            offset={50}
            duration={2000}
            className="links cursor-pointer"
          >
            Projects
          </Link>

          <div className="dot inline-block align-middle" />

          <Link
            to="Contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={2000}
            className="links cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Nav */}

      <div className="px-4 flex flex-row justify-between items-center w-full lg:hidden">
        <div>
          <img src={Logo} width={90} className="cursor-pointer" />
        </div>
        <div>
          <button
            className="text-2xl text-p1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } z-40 w-full fixed top-20 left-0 bg-s1`}
          >
            <div className="z-30 relative flex flex-col min-h-screen overflow-hidden text-p4 font-bold uppercase text-3xl mx-10 mt-14 top-20 items-center space-y-12">
              <Link
                onClick={() => setIsOpen(!isOpen)}
                to="About"
                spy={true}
                smooth={true}
                offset={50}
                // duration={500}
                className="links cursor-pointer"
              >
                About
              </Link>
              <Link
                onClick={() => setIsOpen(!isOpen)}
                to="Skill"
                spy={true}
                smooth={true}
                offset={50}
                // duration={500}
                className="links cursor-pointer"
              >
                Skill
              </Link>
              <Link
                onClick={() => setIsOpen(!isOpen)}
                to="Works"
                spy={true}
                smooth={true}
                offset={50}
                // duration={500}
                className="links cursor-pointer"
              >
                Projects
              </Link>
              <div className="dot inline-block align-middle" />
              <Link
                onClick={() => setIsOpen(!isOpen)}
                to="Contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={2000}
                className="links cursor-pointer"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
