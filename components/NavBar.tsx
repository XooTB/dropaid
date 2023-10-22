"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import useAuthStore from "@/store/AuthStore";
import { useToast } from "./ui/use-toast";
import { MoonIcon } from "lucide-react";
import { useTheme } from "next-themes";

const MenuBarData = {
  user: [
    {
      name: "Profile",
      link: "/user",
    },
    {
      name: "Jobs",
      link: "/user/jobs",
    },
  ],
  jobs: [
    {
      name: "Add",
      link: "/add",
    },
    {
      name: "My Jobs",
      link: "/user/jobs",
    },
  ],
};
const NavBar = () => {
  const { user, logout } = useAuthStore();
  const { toast } = useToast();

  const handleLogout = () => {
    logout();
    toast({
      title: "Success!",
      description: "Successfully Logged out!",
    });
  };

  const { setTheme } = useTheme();

  return (
    <div className="flex justify-between px-20 h-14 items-center border-b">
      <Link href={"/"}>
        <h1 className="dark:text-white text-[#020817] font-semibold text-3xl font-mono">
          DropAid
        </h1>
      </Link>
      <div>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>User</MenubarTrigger>
            <MenubarContent>
              {MenuBarData.user.map((data, i) => (
                <Link href={data.link} key={i}>
                  <MenubarItem>{data.name}</MenubarItem>
                </Link>
              ))}
              <MenubarSeparator />
              {user ? (
                <MenubarItem onClick={handleLogout}>Logout</MenubarItem>
              ) : (
                <Link href={"/auth"}>
                  <MenubarItem>Login</MenubarItem>
                </Link>
              )}
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Jobs</MenubarTrigger>

            <MenubarContent>
              {MenuBarData.jobs.map((data, i) => (
                <Link href={data.link} key={i}>
                  <MenubarItem>{data.name}</MenubarItem>
                </Link>
              ))}
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>
              <MoonIcon />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem onClick={() => setTheme("light")}>Light</MenubarItem>
              <MenubarItem onClick={() => setTheme("dark")}>Dark</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
};

export default NavBar;
