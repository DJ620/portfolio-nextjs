"use client";
import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { roboto } from "../../../public/Assets/Fonts";

const About = () => {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, {once: true});

  // useEffect(() => {
  //   console.log({isInView})
  // }, [isInView]);

  return (
    <div id="About">
      <div
        className="px-8 pt-16 md:px-16 lg:px-32 contain-section relative"
      >
        <h1 className={`pb-10 text-4xl font-bold text-cyan-700 header-slide ${isInView && "slide-in-left"}`} ref={ref}>ABOUT</h1>
        <div className={`space-y-5 text-base ${roboto.className} ${isInView && "slide-in-up"}`}>
          <p>
            Hey there, I'm DJ – a passionate software engineer hailing from the
            vibrant city of Los Angeles. With over three years of professional
            experience in the industry, I've immersed myself in the dynamic
            world of web development, specializing in the MERN stack.
          </p>
          <p>
            My journey into the world of coding took an unexpected turn from the
            bustling streets of New York City, where I pursued a career in
            acting and even serenaded patrons as a singing server at Ellen's
            Stardust Diner. However, driven by a desire for stability and
            structure, I found my calling in the ever-evolving landscape of web
            development.{" "}
          </p>
          <p>
            Equipped with a comprehensive education from UCLA Extension's
            rigorous full stack web development bootcamp, I swiftly immersed
            myself in the intricacies of JavaScript, mastering tools like Node,
            Express, React, MongoDB, and more. Unraveling the mysteries of the
            digital realm has been an exhilarating endeavor, fueled by a
            relentless pursuit of excellence.
          </p>
          <p>
            In my professional endeavors, I've had the privilege of spearheading
            migration projects and collaborating closely with cross-functional
            teams to deliver robust solutions. At InvestCloud, I not only
            elevated my technical acumen but also embraced leadership roles,
            guiding and mentoring fellow developers to achieve their full
            potential.
          </p>
          <p>
            When I'm not knee-deep in code, you'll find me tinkering with
            personal projects like DJ's Wordle – my take on the classic word
            game, or diving into the pages of a good book with my Reading
            Tracker app. I believe in infusing creativity into everything I do,
            whether it's solving complex problems or collaborating with
            like-minded individuals to turn ideas into reality.
          </p>
          <p>
            If you're seeking a seasoned collaborator to bring your digital
            vision to life, I'm here to help. Let's connect and embark on a
            journey of digital transformation, where we'll push boundaries,
            innovate relentlessly, and create experiences that leave a lasting
            impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
