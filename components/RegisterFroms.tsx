"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import useSignup from "@/hooks/useSignup";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

type formValues = {
  username: string;
  password: string;
  email: string;
};

export default function RegisterForm() {
  const { isLoading, error, signUp } = useSignup();
  const { toast } = useToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formValues>();
  const onSubmit: SubmitHandler<formValues> = async (data) => {
    await signUp(data.username, data.email, data.password);
    toast({
      title: "Success!",
      description: "Successfully Registered",
    });

    router.push("/user");
  };
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 w-full min-h-[250px]"
    >
      <Input
        type="text"
        placeholder="Username"
        {...register("username", { required: true })}
      />
      <Input
        type="email"
        placeholder="Email"
        {...register("email", { required: true })}
      />
      <Input
        type="password"
        placeholder="Password"
        {...register("password", { required: true })}
      />

      <Button type="submit">Register</Button>
    </form>
  );
}
