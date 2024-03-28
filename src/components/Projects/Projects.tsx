"use client"
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectsInfo } from "../../../public/Assets/ProjectsInfo";
import Modal from "./Modal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projectsInfo[0]);
  return (
    <div className="px-8 pt-16 md:px-16 lg:px-32 contain-section" id="Work">
      <h1 className="pb-10 text-5xl font-bold text-cyan-700">Projects</h1>
      <div className="flex flex-wrap justify-center gap-px">
        {projectsInfo.map((project) => {
          return <ProjectCard project={project} key={project.name} setSelectedProject={setSelectedProject} />;
        })}
      </div>
      <Modal project={selectedProject} />
    </div>
  );
};

export default Projects;
