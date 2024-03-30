import React from "react";
import Resume from "./Resume";
import Toolbox from "./Toolbox";
import { roboto } from "../../../public/Assets/Fonts";

const Experience = () => {
  return (
    <div
      className="px-8 pt-16 md:px-16 lg:px-32 contain-section"
      id="Experience"
    >
      <h1 className="pb-10 text-4xl font-bold text-cyan-700">EXPERIENCE</h1>
      <div className="md:border-l-2 md:border-cyan-700 md:border-opacity-50 md:rounded-bl">
        <Resume />
        <p className={`mt-10 md:pl-5 uppercase ${roboto.className}`}>My toolbox</p>
        
        <div className="bg-cyan-700 rounded-r rounded-bl bg-opacity-50">
          <Toolbox />
        </div>
        </div>
      
      <div className="mt-10 flex justify-center">
        <a
          href="djHershRes.pdf"
          target="_blank"
          className="border-2 rounded border-cyan-700 text-cyan-700 hover:bg-cyan-700 hover:text-white p-2"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Experience;
