import React from "react";

export const About = () => {
  return (
    <div className="mx-3">
      <p
        className="text-teal-500 text-[18px]
        font-semibold tracking-wider"
      >
        About
      </p>
      <hr className="h-0.5 bg-teal-500" /><div className="rounded-lg px-3 py-3  my-2 mx-1  bg-teal-100">
      <p className="text-[12px] tracking-wider ">
        As a novice <span className="font-bold">Web Developer</span>, I build
        user-friendly and responsible web applications. I'm proficient in HTML,
        CSS, Javascript along with React Framework.
      </p>
      <p className="text-[12px] tracking-wider my-2 mx-1">
        I prioritize writing clean and efficient code with my experience through
        my projects.
      </p>
      <p className="text-[12px] tracking-wider my-2 mx-1">
        Check out my{" "}
        <a href="" className="text-teal-800 hover:border-b hover:border-green-600 hover:animate-slideIn hover:duration-500">
          Projects
        </a>{" "}
        and{" "}
        <a href="" className="text-teal-800 hover:border-b hover:border-green-600">
          Resume
        </a>{" "}
        !
      </p></div>
    </div>
  );
};
