"use client";
import { useRef } from "react";
import Resume from "./Resume";
import Toolbox from "./Toolbox";
import { roboto } from "../../../public/Assets/Fonts";
import Button from "../reusable/Button";
import { useInView } from "framer-motion";

const Experience = () => {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      className="px-8 pt-16 md:px-16 lg:px-32 contain-section"
      id="Experience"
    >
      <h1
        className={`pb-10 text-4xl font-bold text-cyan-700 ${
          isInView && "slide-in-left"
        }`}
        ref={ref}
      >
        EXPERIENCE
      </h1>
      <div
        className={`md:border-l-2 md:border-cyan-700 md:border-opacity-50 md:rounded-bl ${
          isInView && "slide-in-up"
        }`}
      >
        <Resume />
        <div className={`mt-10 text-right text-base ${roboto.className}`} style={{wordSpacing: "-4px", letterSpacing: "-1px"}}>
          <hr/>
          <p className="mt-10 mb-3"><span className="font-extrabold text-cyan-700">Full Stack Web Development Certificate</span> | UCLA Extension, Los Angeles, CA, January 2021</p>
          <p><span className="font-extrabold text-cyan-700">Bachelor of Fine Arts</span>, Musical Theatre | AMDA, Los Angeles, CA, June 2011</p>
        </div>
        <p className={`mt-10 md:pl-5 uppercase ${roboto.className}`}>
          My toolbox
        </p>

        <div className="bg-cyan-700 rounded-r rounded-bl bg-opacity-50">
          <Toolbox />
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="djHershRes.pdf"
          target="_blank"
        >
          <Button text="Download Resume" />
        </a>
      </div>
    </div>
  );
};

export default Experience;
