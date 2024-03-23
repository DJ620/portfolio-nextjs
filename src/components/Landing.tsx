import Image from "next/image";
import React from "react";
import fancyHeadshot from "../../public/images/fancyheadshot-png.png";

const Landing = () => {
  return (
    <div className="flex flex-wrap items-center justify-center pt-5 text-center">
      <div className="w-screen h-full pt-2">
        <Image
          src={fancyHeadshot}
          alt="headshot"
        //   width={250}
        //   height={250}
          className="w-auto h-[600px] drop-shadow-2xl"
        />
      </div>
      <div className="w-screen bg-blue-500 shadow-2xl shadow-slate-600">
        <p className="py-3 text-5xl font-extrabold text-white">Hello, I'm Daniel</p>
      </div>
      {/* <div className="w-screen mt-5 text-white bg-blue-600 shadow-2xl"> */}
        <p className="mt-10 text-4xl mb-28">
          (but you can call me <span className="px-1 italic font-bold">DJ</span>)
        </p>
      {/* </div> */}
    </div>
  );
};

export default Landing;
