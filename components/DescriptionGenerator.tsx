"use client";

import React, { ChangeEvent, useState } from "react";
import useGenerateDesc from "@/components/useGenerateDesc";
import { Button } from "@/components/ui/button";
import { Clipboard } from "lucide-react";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import ImageCard from "./ImageCard";
import useUploadImage from "@/hooks/useUploadImage";
import { ClipLoader } from "react-spinners";

type Props = {
  titles: string[];
  images: string[];
  id: string;
  specs: {
    category: string;
    value: string;
  }[];
};

export type formValues = {
  image1: string;
  image2: string;
  productTitle1: string;
  productTitle2: string;
  description: string;
  boxContents: string;
};

const DescriptionGenerator = ({ titles, images, id, specs }: Props) => {
  const [image1, setImage1] = useState<string>("");
  const [image2, setImage2] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [boxItems, setBoxItems] = useState<string>("");
  const [descHtml, setDescHtml] = useState<string | null>();
  const [uploadQueue, setUploadQueue] = useState<string[]>([]);
  const { uploadImages, isLoading, urls } = useUploadImage();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    inputName: string
  ) => {
    switch (inputName) {
      case "image1":
        setImage1(e.target.value);
        return;
      case "image2":
        setImage2(e.target.value);
        return;
      case "description":
        setDescription(e.target.value);
        return;
      case "boxItems":
        setBoxItems(e.target.value);
        return;
    }
  };

  const handleGeneration = () => {
    const data = {
      image1,
      image2,
      description,
      boxItems,
      titles,
      specs,
    };

    setDescHtml(useGenerateDesc(data));
  };

  const handleImageSelect = (url: string) => {
    if (uploadQueue?.find((el) => el === url)) {
      setUploadQueue(uploadQueue.filter((el) => el !== url));
    } else {
      setUploadQueue([...uploadQueue, url]);
    }
  };

  const handleUpload = async () => {
    if (uploadQueue.length) {
      await uploadImages(uploadQueue, id);
    }

    setUploadQueue([]);
  };

  return (
    <div className="py-5 flex gap-5">
      <div className="w-1/2 border  min-h-[160px] rounded-lg flex flex-col gap-5 px-3 py-5 ">
        <div className="border flex flex-col gap-3 py-3 px-2 rounded-lg">
          <Input
            placeholder="Image 1"
            onChange={(e) => handleChange(e, "image1")}
          />
          <Input
            placeholder="Image 2"
            onChange={(e) => handleChange(e, "image2")}
          />
          <Input
            placeholder="Description"
            onChange={(e) => handleChange(e, "description")}
          />
          <Input
            placeholder="Box Contents"
            onChange={(e) => handleChange(e, "boxItems")}
          />
          <Button onClick={handleGeneration}>Generate</Button>
        </div>
        <hr />
        <div className="">
          <div className="flex justify-between px-2 items-center">
            <h2>Select Images to upload: </h2>
            <Button onClick={handleUpload} disabled={isLoading}>
              Upload
            </Button>
          </div>
          <div className="w-full break-words py-2 px-2">
            {uploadQueue && !isLoading
              ? uploadQueue.map((el, i) => (
                  <p className="text-xs py-1" key={i}>
                    {el}
                  </p>
                ))
              : null}
            {!uploadQueue && urls
              ? urls.map((url, i) => <p className="text-xs py-1">{url}</p>)
              : null}
            {uploadQueue && isLoading ? <ClipLoader color="white" /> : null}
            {!isLoading && urls
              ? urls.map((url, i) => (
                  <p className="text-xs py-1" key={i}>
                    {url}
                  </p>
                ))
              : null}
          </div>
          <div className="grid grid-cols-4 gap-2">
            {images.map((img, i) => (
              <ImageCard
                key={i}
                url={img}
                handleImageSelect={handleImageSelect}
                images={uploadQueue}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-1/2 border min-h-[160px] rounded-lg px-5 py-2">
        <div className="flex justify-between border-b py-2 items-center">
          <h2 className="font-sans font-semibold">Description HTML</h2>
          {descHtml && (
            <Button
              onClick={() => {
                navigator.clipboard.writeText(descHtml);
              }}
              className="gap-1"
            >
              <Clipboard size={16} /> Copy
            </Button>
          )}
        </div>
        <ScrollArea>
          <p>{descHtml}</p>
        </ScrollArea>
      </div>
    </div>
  );
};

export default DescriptionGenerator;
