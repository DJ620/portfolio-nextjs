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
        <div className="bg-white modal-box max-h-[98vh] h-auto pb-10 overflow-hidden">
          <div>
          <Image src={picture} alt={alt} className="rounded-lg"/>
          <div className="flex justify-between px-4 py-5">
            <a href="" target="_blank">
            <button className="btn-md btn w-32 text-cyan-700 border-cyan-700 bg-white">Visit</button></a>
            <a href="" target="_blank">
            <button className="btn-md btn w-32 text-cyan-700 border-cyan-700 bg-white">Code</button></a>
          </div>
          </div>
          <div className="px-4">
            <h1 className="text-3xl text-center text-cyan-700 font-semibold mb-2">
              DJ's Wordle
            </h1>
            <div className="max-h-80 overflow-scroll">
              <p>
                This is my rendition of the classic game 'Wordle,' developed
                entirely from scratch without relying on any tutorials or
                guides. In my Wordle app, users can enjoy the daily challenge of
                guessing the secret word, shared among all players and changing
                every day. Additionally, players can immerse themselves in
                'Endless' mode, starting with a 3-letter word and progressing
                with each correct guess to longer words for an ever-increasing
                challenge. To add a personal touch, users have the option to
                create their custom Wordle challenges, where they choose the
                word and set the number of guesses for their challenger. A
                unique URL is then generated for easy sharing with friends or
                family. Experience the joy of word guessing and challenge your
                friends with my custom Wordle app!
              </p>
              <p className="mt-5">Tools Used:</p>
              <p>
                React / Redux / TailwindCSS / Framer-Motion / Vite / React-Icons /
                React-Confetti
              </p>
            </div>
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
