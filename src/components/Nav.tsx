import Link from "next/link";
import React from "react";

type navProps = {
  page: string;
};

const Nav = () => {
  const NavLink = ({ page }: navProps) => {
    return <Link href={`/${page}`} className="px-2 hover:bg-blue-600 hover:text-white hover:shadow-md hover:shadow-black">{page}</Link>;
  };
  return (
    <div className="absolute top-16 bg-white bg-opacity-50 rounded-bl right-0 text-blue-600 text-xl">
      <div>
        <NavLink page="Portfolio" />
      </div>
      <div>
        <Link href="">About</Link>
      </div>
      <div>
        <Link href="">Contact</Link>
      </div>
    </div>
  );
};

export default Nav;
