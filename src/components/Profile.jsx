import React from "react";
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { FaGithubAlt, FaSquareGithub } from "react-icons/fa6";
import { RiArrowRightDoubleLine } from "react-icons/ri";

export const Profile = () => {
  return (
    <div
      className="flex flex-col justify-center
     items-center mt-5">
      <div className="w-44 h-44 bg-teal-500 rounded-full">
        <img className="w-full h-full object-cover" />
      </div>
      <div className="text-center capitalize my-2">
        <p className="text-[15px] font-medium tracking-wide">Harini priya</p>
        <p className="text-[16px] font-medium tracking-wide">
          final yr student - web developer
        </p>
        <div className="flex justify-center my-1 gap-3">
         <a href="https://www.linkedin.com/in/harini-priya-400271319/" > <FaLinkedin
            size={20}
            className="hover:shadow-2xl hover:shadow-black hover:scale-110 duration-200"
          /></a><a href="https://github.com/harinipriya23/">
          <FaSquareGithub
            size={20}
            className="hover:shadow-2xl hover:shadow-black hover:scale-110 duration-200"
          /></a>
        </div>
        <button
          className="items-center gap-2 group  
        hover:bg-gradient-to-t hover:from-teal-500 hover:scale-90 duration-500 text-[13px] font-medium capitalize my-1 px-4 py-2 bg-teal-300
        rounded-md ">
          view resume
        </button>
      </div>
    </div>
  );
};
