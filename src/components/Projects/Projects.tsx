"use client";
import { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { projectsInfo } from "../../../public/Assets/ProjectsInfo";
import Modal from "./Modal";
import { StaticImageData } from "next/image";
import { useInView } from "framer-motion";

type project = {
  name: string;
  deployed: string;
  image: StaticImageData;
  repo: string;
  description: string;
  tech: string[];
};

const Projects = () => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [selectedProject, setSelectedProject] = useState<project>(
    projectsInfo[0]
  );

  const isInView = useInView(ref, { once: true });

  const setProject = (project: project) => {
    setSelectedProject(project);
  };

  return (
    <div className="px-8 pt-16 md:px-16 lg:px-32 contain-section" id="Work">
      <h1
        className={`pb-10 text-4xl font-bold text-cyan-700 ${
          isInView && "slide-in-left"
        }`}
        ref={ref}
      >
        PROJECTS
      </h1>
      <div className="flex flex-wrap justify-center gap-px">
        {projectsInfo.map((project) => {
          return (
            <ProjectCard
              project={project}
              key={project.name}
              setProject={setProject}
            />
          );
        })}
      </div>
      <Modal project={selectedProject} />
    </div>
  );
};

export default Projects;
