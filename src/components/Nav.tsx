import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="">
      <div className="text-xl">
        <Link href="">Portfolio</Link>
      </div>
      <div className="text-xl">
        <Link href="">About</Link>
      </div>
      <div className="text-xl">
        <Link href="">Contact</Link>
      </div>
    </div>
  );
};

export default Nav;
