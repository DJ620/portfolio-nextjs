"use client";
import Image from "next/image";
import React from "react";
import fancyHeadshot from "../../../public/images/fancyheadshot-png.png";
import { motion } from "framer-motion";
import LandingSVG from "./LandingSVG";
import { TypeAnimation } from "react-type-animation";
import { roboto } from "../../../public/Assets/Fonts";

const Landing = () => {
  return (
    <div className="text-center bg-cyan-700 overflow-hidden" id="Landing">
      <div className="overflow-hidden relative shadow-2xl bg-cyan-700 contain-w">
        <div className="absolute size-full opacity-50">
          <LandingSVG />
        </div>
        <div
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // transition={{ duration: 0.75 }}
          className={`md:flex md:flex-row-reverse landing`}
        >
          <div className="mx-auto relative my-5 md:flex md:flex-col md:items-center md:justify-center">
            <p className="font-extrabold text-white text-7xl lg:text-8xl 2xl:text-9xl">
              DJ HERSH
            </p>
            <p className="text-3xl font-bold text-neutral-800 lg:text-4xl 2xl:text-5xl sm:text-nowrap">
              Frontend Web Developer
            </p>
            <div className="mt-5 text-lg h-20 w-[90vw] md:w-[460px] md:mt-20 md:h-auto xl:text-xl 2xl:text-2xl 2xl:w-[650px] xl:w-[550px] mx-auto">
              <TypeAnimation
                sequence={[
                  "I like to build things using HTML",
                  1000,
                  "I like to build things using CSS",
                  1000,
                  "I like to build things using JavaScript",
                  1000,
                  "I like to build things using React",
                  1000,
                  "I like to build things using TypeScript",
                  1000,
                  "I like to build things using Next.js",
                  1000,
                  "I like to build things using React Native",
                  1000,
                  "I like to build things using Redux",
                  1000,
                  "I like to build things using TailwindCSS",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
                className={`${roboto.className}`}
              />
              {/* <p className={roboto.className}>I like to build things using React Native</p> */}
            </div>
          </div>
          <div>
            <img
              src="/images/fancyheadshot-png.png"
              alt="headshot"
              className="h-auto w-[450px] lg:w-[500px] 2xl:w-[600px] md:pt-5 -ml-px drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
