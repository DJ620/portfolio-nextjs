"use client"
import Image from "next/image";
import React from "react";
import fancyHeadshot from "../../public/images/fancyheadshot-png.png";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="text-center bg-cyan-700">
      {/* <div className="overflow-hidden shadow-2xl bg-cyan-700 md:flex md:flex-row-reverse contain-w"> */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ stiffness: 120, duration: 0.75 }}
          className="overflow-hidden shadow-2xl bg-cyan-700 md:flex md:flex-row-reverse contain-w"
        >
          <div className="mx-auto my-5 md:flex md:flex-col md:items-center md:justify-center">
            <p className="font-extrabold text-white text-7xl lg:text-8xl 2xl:text-9xl">
              DJ HERSH
            </p>
            <p className="text-3xl font-bold text-neutral-800 lg:text-4xl 2xl:text-5xl sm:text-nowrap">
              Frontend Web Developer
            </p>
          </div>
          <div>
            <Image
              src={fancyHeadshot}
              alt="headshot"
              className="h-auto w-[450px] lg:w-[500px] 2xl:w-[600px] md:pt-5 -ml-px drop-shadow-2xl mix-blend-hard-light"
            />
          </div>
        </motion.div>
      {/* </div> */}
    </div>
  );
};

export default Landing;
