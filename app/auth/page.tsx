import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterFroms";
import { Separator } from "@/components/ui/separator";

const page = () => {
  return (
    <div className="w-full items-center justify-center flex flex-col py-10 px-10">
      <h1 className="text-2xl pb-5">Register/Login</h1>
      <Separator />
      <Tabs
        defaultValue="login"
        className="w-1/3 flex items-center flex-col justify-center border py-5 px-3 rounded-md min-h-[320px] mt-5"
      >
        <TabsList className="w-full border py-1">
          <TabsTrigger value="login" className="w-1/2">
            Login
          </TabsTrigger>
          <TabsTrigger value="register" className="w-1/2">
            Register
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login" className="w-full px-5">
          <LoginForm />
        </TabsContent>
        <TabsContent value="register" className="w-full px-5">
          <RegisterForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
