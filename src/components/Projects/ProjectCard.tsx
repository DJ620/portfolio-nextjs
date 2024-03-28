"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Modal from "./Modal";

type props = {
  picture: StaticImageData;
  alt: string;
};

const ProjectCard = ({ picture, alt }: props) => {

  const openProject = () => {
    (document.getElementById("my_modal_2") as HTMLDialogElement).showModal();
  };

  return (
    <>
      <Modal picture={picture} alt={alt} />
      <div
        className="relative overflow-hidden cursor-pointer w-72 h-96 bg-cyan-700"
        onClick={openProject}
      >
        <Image src={picture} alt={alt} fill />
        <div className="absolute flex flex-col justify-between w-full h-full text-center transition-opacity duration-500 ease-in opacity-0 hover:opacity-100">
          <div className="flex flex-col items-center justify-center h-full gap-20 bg-opacity-90 bg-cyan-700">
            <p className="text-2xl font-extrabold">DJ's Wordle</p>
            <button className="px-5 py-2 border border-black rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
