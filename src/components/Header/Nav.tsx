import Link from "next/link";
import React from "react";

type prop = {
  setShowNav: Function;
};

type navProps = {
  page: string;
};

const Nav = ({ setShowNav }: prop) => {
  const scrollToSection = (page: string) => {
    setShowNav(false);
    document.getElementById(page)?.scrollIntoView({ behavior: "smooth" });
  };

  const NavLink = ({ page }: navProps) => {
    return (
      <div
        className="px-4 py-2 text-center hover:bg-cyan-700 md:rounded hover:text-white uppercase hover:shadow-sm hover:shadow-black cursor-pointer"
        onClick={() => scrollToSection(page)}
      >
        <p>{page}</p>
      </div>
    );
  };
  return (
    <div className="fixed md:flex md:top-3 md:pr-1 md:sticky md:bg-transparent top-[55.5px] bg-white bg-opacity-90 shadow-2xl md:shadow-none rounded-bl-lg right-0 text-cyan-700 text-2xl md:text-xl">
      <NavLink page="About" />
      <NavLink page="Experience" />
      <NavLink page="Work" />
      <NavLink page="Contact" />
    </div>
  );
};

export default Nav;
