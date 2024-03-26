"use client"
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Nav from "./Nav";
import { Dancing_Script } from 'next/font/google';
const dancingScript = Dancing_Script({ subsets: ['latin'] });


const Header = () => {
    const [showNav, setShowNav] = useState(false);
  return (
    <header className="relative flex justify-between px-2 py-1 bg-white bg-opacity-50 shadow-md shadow-slate-100 md:px-5">
      <div>
        <h1 className="px-2 py-1 text-3xl font-extrabold text-white bg-blue-500 rounded-full bg-gradient-to-b from-blue-500 to-blue-500 text-shadow-lg shadow-black">
          <span>DJ</span>
        </h1>
      </div>
      <div className="fixed right-2 sm:right-4 top-2 md:hidden">
      <GiHamburgerMenu className="text-3xl text-blue-500 cursor-pointer hover:text-blue-700 float-end" onClick={() => setShowNav(!showNav)}/>
     {showNav &&  <Nav setShowNav={setShowNav} />}
      </div>
      <div className="hidden md:block">
        <Nav setShowNav={setShowNav} />
      </div>
    </header>
  );
};

export default Header;
