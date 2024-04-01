"use client";
import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

type project = {
  name: string;
  deployed: string;
  image: StaticImageData;
  repo: string;
  description: string;
  tech: string[];
};

type props = {
  project: project;
  setProject: (project: project) => void;
};

const ProjectCard = ({ project, setProject }: props) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const openProject = () => {
    setProject(project);
    (document.getElementById("my_modal_2") as HTMLDialogElement).showModal();
  };

  return (
    <>
      <motion.div
        className="relative overflow-hidden cursor-pointer w-72 h-96 bg-cyan-700"
        onClick={openProject}
        ref={ref}
        style={{ scale: scaleProgress, opacity: opacityProgress }}
      >
        <Image src={project.image} alt={project.name} fill />
        <div className="absolute flex flex-col justify-between w-full h-full text-center transition-opacity duration-300 ease-in opacity-0 hover:opacity-100">
          <div className="flex flex-col items-center justify-center h-full gap-20 bg-opacity-90 bg-cyan-700">
            <p className="text-2xl font-extrabold">{project.name}</p>
            <button className="px-5 py-2 border border-black rounded">
              Learn More
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
