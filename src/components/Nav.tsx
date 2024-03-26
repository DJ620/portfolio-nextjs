import Link from "next/link";
import React from "react";

type prop = {
  setShowNav: Function;
};

type navProps = {
  page: string;
};

const Nav = ({ setShowNav }: prop) => {
  const NavLink = ({ page }: navProps) => {
    return (
      <div className="px-4 py-2 text-center hover:bg-blue-500 hover:bg-opacity-75 md:rounded hover:text-white hover:shadow-sm hover:shadow-black">
        <Link
          href={`/${page}`}
          className="p-2"
          onClick={() => setShowNav(false)}
        >
          {page}
        </Link>
      </div>
    );
  };
  return (
    <div className="absolute md:flex md:top-3 md:pr-1 md:sticky md:bg-transparent md:right-0 top-[52px] bg-white bg-opacity-85 shadow-2xl md:shadow-none rounded-bl-lg -right-2 text-blue-500 text-3xl">
      <NavLink page="About" />
      <NavLink page="Experience" />
      <NavLink page="Work" />
      <NavLink page="Contact" />
    </div>
  );
};

export default Nav;
