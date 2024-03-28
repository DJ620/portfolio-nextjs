import React from "react";
import wordle from "../../../public/images/wordle.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="px-8 pt-16 md:px-16 lg:px-32 contain-section" id="Work">
      <h1 className="pb-10 text-5xl font-bold text-cyan-700">Projects</h1>
      <div className="flex flex-wrap justify-center gap-px">
        <ProjectCard picture={wordle} alt="Wordle" />
        <div className="w-72 h-96 bg-slate-600" />
        <div className="w-72 h-96 bg-slate-600" />
        <div className="w-72 h-96 bg-slate-600" />
        <div className="w-72 h-96 bg-slate-600" />
        <div className="w-72 h-96 bg-slate-600" />
      </div>
    </div>
  );
};

export default Projects;
