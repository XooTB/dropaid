"use client";

import React, { useEffect } from "react";
import ProductForm from "@/components/ProductForm";
import useAuthStore from "@/store/AuthStore";
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
        <h1 className="text-xl">
          You're not logged in. Please Login to Queue a job.
        </h1>
      </div>
    );
  }
  return (
    <div className="px-10 py-8">
      <ProductForm />
    </div>
  );
};

export default page;
