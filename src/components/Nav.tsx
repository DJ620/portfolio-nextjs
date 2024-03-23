import Link from "next/link";
import React from "react";

type navProps = {
  page: string;
};

const Nav = () => {
  const NavLink = ({ page }: navProps) => {
    return (
      <div className="px-4 py-2 text-center hover:bg-blue-500 hover:bg-opacity-75 hover:text-slate-200 hover:shadow-sm hover:shadow-black">
        <Link href={`/${page}`} className="p-2">
          {page}
        </Link>
      </div>
    );
  };
  return (
    <div className="absolute md:flex md:top-0 md:bg-transparent top-[52px] bg-slate-200 bg-opacity-50 rounded-bl -right-2 text-blue-500 text-3xl">
      <NavLink page="Portfolio" />
      <NavLink page="About" />
      <NavLink page="Contact" />
    </div>
  );
};

export default Nav;
