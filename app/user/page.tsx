"use client";

import React, { useEffect } from "react";
import useAuthStore from "@/store/AuthStore";
import profileHeader from "@/assets/profile-header.jpg";
import profile from "@/assets/profile.jpg";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";

const page = () => {
  const { user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/auth");
    }
  });

  if (!user) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <h1>You are not Logged in. Please Login to view your profile</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="min-h-1/3 bg-white">
        <Image src={profileHeader} className="h-64 w-full" alt="profile-head" />
      </div>
      <div className="w-full h-20 flex items-center px-20 gap-3 border-b">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h2>Username</h2>
      </div>
      <div className="px-20 py-5">
        <h2 className="text-xl font-sans">My Jobs</h2>
        <div></div>
      </div>
    </div>
  );
};

export default page;
