import Image from "next/image";
import React from "react";
import fancyHeadshot from "../../public/images/fancyheadshot-png.png";
import Toolbox from "./Toolbox";

const Landing = () => {
  return (
    <div className="text-center">
      <div className="md:flex md:flex-row-reverse">
        <div className="mx-auto my-5 md:flex md:flex-col md:items-center md:justify-center">
          <p className="font-extrabold text-blue-500 text-7xl lg:text-8xl 2xl:text-9xl text-shadow-lg shadow-slate-400">
            DJ Hersh
          </p>
          <p className="text-3xl font-bold lg:text-4xl 2xl:text-5xl sm:text-nowrap">Frontend Web Developer</p>
        </div>
        <div>
          <Image
            src={fancyHeadshot}
            alt="headshot"
            className="h-auto w-[450px] xl:w-[500px] md:pt-5 drop-shadow-2xl"
          />
        </div>
      </div>
      <div className="w-full h-20 bg-blue-500 shadow-2xl shadow-slate-700" />
    </div>
  );
};

export default Landing;
