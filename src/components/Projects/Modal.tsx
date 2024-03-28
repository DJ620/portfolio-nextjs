"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

type props = {
  picture: StaticImageData;
  alt: string;
};

const Modal = ({ picture, alt }: props) => {
  return (
    <>
      <dialog id="my_modal_2" className="modal">
        <div className="bg-white modal-box max-h-[98vh] overflow-hidden pb-0 md:max-w-[98vw] lg:max-w-[1100px] min-w-0 px-0 md:pt-0">
          <div className="md:flex md:justify-between  md:items-center px-5 md:px-0">
            <Image
              src={picture}
              alt={alt}
              className="rounded-lg h-96 w-auto mx-auto md:mx-0 md:w-[50vw] max-w-[700px] md:h-auto md:rounded-none"
            />
            <div className="px-4 md:w-[46vw] max-w-[700px]">
              <h1 className="text-3xl text-center text-cyan-700 font-semibold mb-2 xl:mb-8">
                DJ's Wordle
              </h1>
              <div className="max-h-[350px] lg:max-h-[550px] xl:max-h-full pb-2 overflow-scroll">
                <p>
                  This is my rendition of the classic game 'Wordle,' developed
                  entirely from scratch without relying on any tutorials or
                  guides. In my Wordle app, users can enjoy the daily challenge
                  of guessing the secret word, shared among all players and
                  changing every day. Additionally, players can immerse
                  themselves in 'Endless' mode, starting with a 3-letter word
                  and progressing with each correct guess to longer words for an
                  ever-increasing challenge. To add a personal touch, users have
                  the option to create their custom Wordle challenges, where
                  they choose the word and set the number of guesses for their
                  challenger. A unique URL is then generated for easy sharing
                  with friends or family. Experience the joy of word guessing
                  and challenge your friends with my custom Wordle app!
                </p>
                <p className="mt-5">Tools Used:</p>
                <p>
                  React / Redux / TailwindCSS / Framer-Motion / Vite /
                  React-Icons / React-Confetti
                </p>
              </div>
            </div>
          </div>
          <div className="flex py-5 bg-cyan-700 justify-center gap-5 sm:gap-20 md:gap-36">
            <a href="" target="_blank">
              <button className="cursor-pointer btn-md text-lg btn w-32 text-cyan-700 border-cyan-700 bg-white">
                Visit
              </button>
            </a>
            <a href="" target="_blank">
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
