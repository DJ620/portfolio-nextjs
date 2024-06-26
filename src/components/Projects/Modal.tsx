"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { roboto } from "../../../public/Assets/Fonts";

type props = {
  project: {
    name: string;
    deployed: string;
    image: StaticImageData;
    repo: string;
    description: string;
    tech: string[];
  };
};

const Modal = ({ project }: props) => {
  return (
    <>
      <dialog id="my_modal_2" className="modal">
        <div className="bg-white modal-box max-h-[85vh] md:max-h-[90vh] overflow-hidden pb-0 md:max-w-[98vw] lg:max-w-[1100px] min-w-0 px-0 md:pt-0">
          <div className="flex flex-col md:flex-row mx-auto md:justify-between max-h-[70vh] md:max-h-[700px] overflow-scroll  md:items-center px-5 md:px-0">
            <div>
              <Image
                src={project.image}
                alt={project.name}
                className="rounded-lg h-80 w-auto mx-auto md:mx-0 md:w-full max-w-[550px] md:h-auto md:rounded-none"
              />
            </div>
            <div className="px-4 md:w-[46vw] max-w-[700px]">
              <h1 className="text-3xl text-center text-cyan-700 font-semibold mb-2 md:mb-8">
                {project.name}
              </h1>
              <div
                className={`md:max-h-[350px] lg:max-h-[550px] xl:max-h-full pb-2 md:overflow-scroll ${roboto.className} text-base`}
              >
                <p>{project.description}</p>
                <p className="mt-5">Tools Used:</p>
                <p>{project.tech.join(" / ")}</p>
              </div>
            </div>
          </div>
          <div className="flex py-5 bg-cyan-700 justify-center gap-5 sm:gap-20 md:gap-36">
            <a href={project.deployed} target="_blank">
              <button className="cursor-pointer btn-md text-lg btn w-32 text-cyan-700 border-cyan-700 bg-white">
                Visit
              </button>
            </a>
            <a href={project.repo} target="_blank">
              <button className="cursor-pointer btn-md text-lg btn w-32 text-cyan-700 border-cyan-700 bg-white">
                Code
              </button>
            </a>
          </div>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 bottom-2">
              ✕
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button className="cursor-default" />
        </form>
      </dialog>
    </>
  );
};

export default Modal;
