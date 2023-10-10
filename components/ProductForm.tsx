"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import useQueryStore from "@/store/queryStore";
import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";
import useAddToQueue from "@/hooks/useAddToQueue";
import { ToastAction } from "./ui/toast";
import Link from "next/link";

type FormValues = {
  url: string;
  keyword1: string;
  keyword2: string;
  keyword3: string;
  keyword4: string;
  keyword5: string;
  keyword6: string;
};

export default function ProductForm() {
  const { toast } = useToast();
  const router = useRouter();
  const { addQuery } = useQueryStore();
  const { isLoading, addToQueue } = useAddToQueue();

  const number = [1, 2, 3, 4, 5, 6];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const formData = [
      data.keyword1,
      data.keyword2,
      data.keyword3,
      data.keyword4,
      data.keyword5,
      data.keyword6,
    ];

    const keywords = formData.filter((el) => el);
    addQuery(data.url, keywords);

    const response = await addToQueue();

    toast({
      title: "Sucess!",
      description: `Job successfully added to the queue. ID: ${response.jobID}`,
      action: (
        <Link href={"/user/jobs"} className="flex">
          <ToastAction altText="see job">See Jobs</ToastAction>
        </Link>
      ),
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-1/2 border border-slate-400 px-10 py-5 rounded-sm"
    >
      <label>Product Url</label>
      <Input
        type="url"
        placeholder="Product URL"
        {...register("url", {
          required: true,
          min: 20,
        })}
        className="w-full border border-slate-900 mb-5 h-10 text-sm pl-3 rounded-sm"
      />
      <h1 className="">Enter upto 6 keywords:</h1>
      <div className="grid grid-cols-2 gap-3 py-3 rounded-sm mb-5">
        {number.map((num, i) => (
          <div className="flex flex-col" key={i}>
            <label>{`Keyword ${num}`}</label>
            <Input
              type="text"
              placeholder={`Keyword`}
              //@ts-ignore
              {...register(`keyword${num}`, {})}
              className="border-slate-600"
            />
          </div>
        ))}
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
}
