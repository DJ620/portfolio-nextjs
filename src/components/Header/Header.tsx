"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Nav from "./Nav";
import { Dancing_Script } from "next/font/google";
const dancingScript = Dancing_Script({ subsets: ["latin"] });

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className="relative w-full px-2 py-1 bg-white border-b bg-opacity-90 border-slate-100 md:px-5">
      <div className="flex justify-between contain-w">
        <div>
          <h1 className="px-2 py-1 text-3xl font-extrabold text-white rounded-full bg-cyan-700 text-shadow-sm shadow-black">
            <span>DJ</span>
          </h1>
        </div>
        <div className="absolute right-2 sm:right-4 top-2 md:hidden">
          <GiHamburgerMenu
            className="text-3xl cursor-pointer text-cyan-700 hover:text-cyan-800 float-end"
            onClick={() => setShowNav(!showNav)}
          />
          {showNav && <Nav setShowNav={setShowNav} />}
        </div>
        <div className="hidden md:block">
          <Nav setShowNav={setShowNav} />
        </div>
      </div>
    </header>
  );
};

export default Header;
