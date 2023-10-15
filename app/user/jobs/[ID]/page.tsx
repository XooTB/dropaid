"use client";

import React, { useEffect } from "react";
import useGetJob from "@/hooks/useGetJob";
import { ClipLoader } from "react-spinners";
import ImageCard from "@/components/ImageCard";
import { Button } from "@/components/ui/button";
import { VarientCols } from "@/components/Colums";
import VarientsTable from "@/components/VarientsTable";
import { ScrollArea } from "@/components/ui/scroll-area";
import useDownloadStore from "@/store/DownloadStore";
import useDownloadImage from "@/hooks/useDownloadImage";

const page = ({ params }: { params: { ID: string } }) => {
  const { isLoading, data, error, getJob } = useGetJob();
  const { addImage, addVarientImage } = useDownloadStore();
  const { createZip } = useDownloadImage();

  const handleClick = (image: string) => {
    addImage(image);
  };

  const handleImageDownload = () => {
    createZip();
  };

  useEffect(() => {
    const id = params.ID;
    getJob(id);
  }, []);

  return (
    <div className="px-10 bg-slate-100 min-h-screen">
      {isLoading && (
        <div className="w-screen h-screen flex justify-center items-center">
          <ClipLoader />{" "}
        </div>
      )}
      <div className=" bg-neutral-200 px-10 py-2">
        <h1 className="text-xl font-mono">
          URL:{" "}
          <span className="text-blue-500">
            https://www.aliexpress.com/i/4000020773151.html
          </span>
        </h1>
        <p className="text-lg font-mono">
          ID: <span className="text-orange-400 font-semibold">{params.ID}</span>
        </p>
      </div>
      <div className="px-10 py-3">
        <h1 className="text-2xl">
          Title: <span className="text-xl font-serif">{data?.title}</span>
        </h1>
      </div>
      <div className="w-full">
        <div className="w-1/2">
          <div className="flex justify-between">
            <h1 className="text-xl">Product Images: </h1>
            <Button onClick={handleImageDownload}>Download</Button>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {data?.images.map((image, i) => (
              <ImageCard url={image} key={i} handleClick={handleClick} />
            ))}
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
      <div className="w-1/2 py-5">
        <div className="w-full flex justify-between pb-5">
          <h1 className="text-xl">Varients:</h1>
          <Button>Download</Button>
        </div>
        <ScrollArea className="h-96">
          {data?.varients && (
            <VarientsTable data={data?.varients} columns={VarientCols} />
          )}
        </ScrollArea>
      </div>
    </div>
  );
};

export default page;
