"use client"
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Nav from "./Nav";


const Header = () => {
    const [showNav, setShowNav] = useState(false);
  return (
    <header className="flex justify-between relative bg-white bg-opacity-50 px-2">
      <div>
        <h1 className="text-3xl font-extrabold text-blue-600">
          Daniel (DJ) Hersh
        </h1>
        <h2 className="text-xl">Frontend Web Developer</h2>
      </div>
      <div className="">
      <GiHamburgerMenu className="text-3xl text-blue-600 cursor-pointer hover:text-blue-800 float-end" onClick={() => setShowNav(!showNav)}/>
     {showNav &&  <Nav />}
      </div>
    </header>
  );
};

export default Header;
