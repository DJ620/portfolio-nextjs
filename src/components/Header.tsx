"use client"
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Nav from "./Nav";


const Header = () => {
    const [showNav, setShowNav] = useState(false);
  return (
    <header className="relative flex justify-between px-2 pt-1 bg-opacity-50 bg-slate-200">
      <div>
        <h1 className="text-3xl font-extrabold text-blue-500">
          Daniel (DJ) Hersh
        </h1>
        <h2 className="-mt-2 text-xl">Frontend Web Developer</h2>
      </div>
      <div className="fixed right-2 sm:right-4 top-2 md:hidden">
      <GiHamburgerMenu className="text-3xl text-blue-500 cursor-pointer hover:text-blue-700 float-end" onClick={() => setShowNav(!showNav)}/>
     {showNav &&  <Nav />}
      </div>
      <div className="hidden md:block">
        <Nav />
      </div>
    </header>
  );
};

export default Header;
