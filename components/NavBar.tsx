import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="w-full bg-slate-200 h-[50px] flex items-center justify-start">
      <Link href={"/"}>
        <h1 className="text-2xl font-medium pl-20">DropAid</h1>
      </Link>
    </div>
  );
};

export default NavBar;
