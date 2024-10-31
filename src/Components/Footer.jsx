import React from "react";
import {
  FaLinkedinIn,
  FaTelegram,
  FaTwitter,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="px-4 py-10 mx-auto container">
      <div className="text-p1 flex flex-row space-x-2 sm:space-x-4 items-center justify-center sm:text-xl">
        <a
          target="_BLANK"
          href="https://github.com/MIKOXO"
          className="p-2 border-2 border-s1 rounded-full hover:shadow-500 hover:scale-110 ease-in-out duration-300 "
        >
          <FaGithub size={35} />
        </a>
        <a
          target="_BLANK"
          href="https://www.linkedin.com/in/mikiyas-nigatu-63ba282b5/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Blkn47yXQSrSD6zJtZWT0DA%3D%3D"
          className="p-2 border-s1 rounded-full hover:shadow-500 hover:scale-110 ease-in-out duration-300 "
        >
          <FaLinkedinIn size={35} />
        </a>
        <a
          target="_BLANK"
          href="https://x.com/mikermount19?t=skogdJ7XpDGOSTMUTb_6ig&s=09"
          className="p-2 border-s1 rounded-full hover:shadow-500 hover:scale-110 ease-in-out duration-300 "
        >
          <FaTwitter size={35} />
        </a>
        <a
          target="_BLANK"
          href="https://www.instagram.com/miko_walker10?igsh=cnMyMDI3bXV2OXY0"
          className="p-2 border-s1 rounded-full hover:shadow-500 hover:scale-110 ease-in-out duration-300 "
        >
          <FaInstagram size={35} />
        </a>
        <a
          target="_BLANK"
          href="https://t.me/SnowchildMik"
          className="p-2 border-s1 rounded-full hover:shadow-500 hover:scale-110 ease-in-out duration-300 "
        >
          <FaTelegram size={35} />
        </a>
      </div>
      <div>
        <h2 className="text-center text-p1 text-xl font-semibold mt-5">
          {new Date().getFullYear()}
          {""} G.C
        </h2>
      </div>
    </section>
  );
};

export default Footer;
