import React from "react";
import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="px-8 pt-16 pb-5 md:px-16 lg:px-32 contain-section"
      id="Contact"
    >
      <div className="flex justify-center gap-2 text-4xl mb-2">
        <a href="https://www.linkedin.com/in/djhersh/" target="_blank" className="hover:text-cyan-700">
          <FaLinkedin />
        </a>
        <a href="https://www.github.com/dj620" target="_blank" className="hover:text-cyan-700">
          <FaGithubSquare />
        </a>
        <a href="https://www.twitter.com/djhershwebdev" target="_blank" className="hover:text-cyan-700">
          <FaTwitterSquare />
        </a>
      </div>
      <p className="text-center text-sm">DJ HERSH &#169;2024</p>
    </div>
  );
};

export default Footer;
