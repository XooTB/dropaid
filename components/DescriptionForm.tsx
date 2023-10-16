import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

type formValues = {
  image1: string;
  image2: string;
  productTitle1: string;
  productTitle2: string;
  description: string;
  boxContents: string;
};

interface formProps {
  register: any;
  handleSubmit: any;
  onSubmit: any;
}

export default function DescriptionForm({
  register,
  handleSubmit,
  onSubmit,
}: formProps) {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 px-10 py-5"
    >
      <Input type="text" placeholder="Image 1" {...register("image1", {})} />
      <Input type="text" placeholder="Image 2" {...register("image2", {})} />
      <Input
        type="text"
        placeholder="Product Title 1"
        {...register("productTitle1", {})}
      />
      <Input
        type="text"
        placeholder="Product Title 2"
        {...register("productTitle2", {})}
      />
      <Textarea
        placeholder="Product Description"
        {...register("description", {})}
      />
      <Textarea
        placeholder="Box Contents (Comma separated)"
        {...register("boxContents", {})}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
}
