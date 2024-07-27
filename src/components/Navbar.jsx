import React from "react";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
export const Navbar = () => {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experince",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  const short = [
    {
      id: 1,
      link: "resume",
    },
    { id: 2, 
      link: "contact" },
  ];
  const [nav, setNav] = useState();
  return (
    <div>
      <div
        className="flex md:hidden cursor-pointer
        hover:text-teal-800 z-10"
        onClick={() => setNav(!nav)}      >
        {nav ? <FaTimes size={25} className="hover:scale-90 duration-200" /> : <IoMenu size={25} className="hover:scale-90 duration-200" />}
        {nav && <div className=" animate-fadeIn">
        <ul
          className="hidden sm:flex mx-5 gap-7 capitalize">
          {links.map(({ id, link }) => (
            <div>
              <li
                key={id}
                className="text-[15px] font-medium tracking-wide hover:scale-105 hover:text-teal-600 duration-200 
    cursor-pointer">
                {link}
              </li>
              </div>
          ))}
        </ul>
        <ul
        className="flex sm:hidden mx-5 gap-7 capitalize">
        {short.map(({ id, link }) => (
          <div>
            <li
              key={id}
              className=" text-[15px] font-medium tracking-wide hover:scale-105
               hover:text-teal-600 duration-200 
  cursor-pointer"
            >
              {link}
            </li>
            </div>
        ))}
      </ul>
      </div>}
      </div>
    </div>
  );
};
