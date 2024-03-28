import React from "react";
import Toolbox from "../Toolbox";
import Resume from "./Resume";

const Experience = () => {
  return (
    <div className="px-8 pt-16 md:px-16 lg:px-32 contain-section" id="Experience">
      <h1 className='pb-10 text-5xl font-bold text-cyan-700'>Experience</h1>
      <Resume />
    </div>
  );
};

export default Experience;
