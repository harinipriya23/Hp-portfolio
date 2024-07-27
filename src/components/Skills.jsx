import React from "react";
import { skillsImg } from "./images/img";
export const Skills = () => {
  const skills = [
    {
      id: 1,
      skill: "HTML",
      src: skillsImg.html,
    },
    {
      id: 2,
      skill: "CSS",
      src: skillsImg.css,
    },
    {
      id: 3,
      skill: "Tailwind",
      src: skillsImg.tailwind,
    },
    {
      id: 4,
      skill: "Javascript",
      src: skillsImg.javascript,
    },
    {
      id: 5,
      skill: "React",
      src: skillsImg.react,
    },
    {
      id: 6,
      skill: "Node",
      src: skillsImg.node,
    },
  ];
  return (
    <div className="mx-3 capitalize">
      <p
        className="text-teal-500 text-[18px]
        font-semibold tracking-wider">
        Skills
      </p>
      <hr className="h-0.5 bg-teal-500" />
    <ul className="my-5 grid grid-cols-2 p-5 gap-6 rounded-lg bg-teal-100">
           {skills.map(({ id, skill, src }) => {
        return (
            <li key={id} className="grid place-items-center place-self-center rounded-2xl">
              <div className="w-28 h-28 ring-1 duration-500 hover:scale-90 hover:ring-4 ring-teal-400 hover:ring-offset-2
               hover:ring-offset-teal-700  rounded-se-3xl rounded-es-3xl p-4 bg-teal-200
               ">
                <img src={src} className="w-full h-full p-4
                " />
              </div>
              <p className="mt-3 text-[15px] font-semibold ">{skill}</p>
            </li>
          
        );
      })}</ul>
    </div>
  );
};
