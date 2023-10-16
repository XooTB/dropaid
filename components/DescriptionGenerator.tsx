"use client";
import React, { useState } from "react";
import DescriptionForm from "@/components/DescriptionForm";
import { useForm, SubmitHandler } from "react-hook-form";
import DescPreview from "@/components/DescPreview";
import useGenerateDesc from "@/components/useGenerateDesc";
import { Button } from "@/components/ui/button";
import { Clipboard } from "lucide-react";

type Props = {};

export type formValues = {
  image1: string;
  image2: string;
  productTitle1: string;
  productTitle2: string;
  description: string;
  boxContents: string;
};

const DescriptionGenerator = (props: Props) => {
  const [data, setData] = useState<formValues>();

  let html = "";

  if (data) {
    html = useGenerateDesc(data);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formValues>();
  const onSubmit: SubmitHandler<formValues> = (data) => setData(data);

  return (
    <div className=" py-5">
      <div className="flex gap-5">
        <div className="w-1/2 border border-black min-h-screen rounded-lg">
          <DescriptionForm
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
          />
        </div>
        <div className="w-1/2 border border-black min-h-screen rounded-lg">
          <h2 className="pl-2 pt-2">Preview:</h2>
          {data && <DescPreview data={data} />}
        </div>
      </div>
      <div className="w-full mt-5 border border-black min-h-[200px] rounded-lg px-5 py-2">
        <div className="flex justify-between">
          <h2>Description HTML:</h2>
          <Button
            onClick={() => {
              navigator.clipboard.writeText(html);
            }}
            className="gap-1"
          >
            <Clipboard size={16} /> Copy
          </Button>
        </div>
        <p className=" overflow-hidden">{data && html}</p>
      </div>
    </div>
  );
};

export default DescriptionGenerator;
