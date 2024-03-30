"use client";
import React, { useState } from "react";
import Nav from "./Nav";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className="relative w-full px-2 h-14 py-1 bg-white border-b bg-opacity-90 border-slate-100 md:px-5">
      <div className="flex justify-between contain-w">
        <div className="flex items-center">
          <a href="#" className="px-2 py-1 text-3xl font-extrabold text-white rounded-full bg-cyan-700 text-shadow-sm shadow-black">
            DJ
          </a>
        </div>
        <div className="absolute right-2 sm:right-4 top-2 md:hidden">
          <label className="burger">
            <input type="checkbox" id="burger" checked={showNav} onChange={() => setShowNav(!showNav)}/>
            <span></span>
            <span></span>
            <span></span>
          </label>
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
