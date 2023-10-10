import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <div className="w-full bg-slate-200 h-[50px] flex items-center justify-between px-20">
      <Link href={"/"}>
        <h1 className="text-2xl font-medium">DropAid</h1>
      </Link>
      <div className="flex gap-5">
        <Link href={"/add"}>
          <Button className="px-5">Add</Button>
        </Link>
        <Link href={"/user/jobs"}>
          <Button className="px-7">Jobs</Button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
