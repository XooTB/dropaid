"use client";

/**
 * Renders the page for a specific job ID, displaying job details, product images, variants, and a description generator.
 * @param {Object} props - The component props.
 * @param {Object} props.params - The job ID passed as a parameter.
 * @returns {JSX.Element} - The rendered component.
 */

import React, { useEffect, useState } from "react";
import useGetJob from "@/hooks/useGetJob";
import { ClipLoader } from "react-spinners";
import ImageCard from "@/components/ImageCard";
import { Button } from "@/components/ui/button";
import { VarientCols } from "@/components/Colums";
import VarientsTable from "@/components/VarientsTable";
import useDownloadStore from "@/store/DownloadStore";
import useDownloadImage from "@/hooks/useDownloadImage";
import DescriptionGenerator from "@/components/DescriptionGenerator";
import { Checkbox } from "@/components/ui/checkbox";

const page = ({ params }: { params: { ID: string } }) => {
  const { isLoading, data, error, getJob } = useGetJob();
  const [selectState, setSelectState] = useState<boolean>(false);

  /**
   * Custom hook that provides access to image-related functions and state.
   */
  const {
    addImage,
    varientImages,
    cleanImagesState,
    images,
    addImages,
    addVarientImages,
  } = useDownloadStore();
  const { createZip } = useDownloadImage();

  /**
   * Handles the selection of an image. If the image is not already in the `images` array, it is added to it.
   * If the image is already in the `images` array, it is removed from it.
   * @param image - The image to be selected.
   */
  const handleImageSelect = (image: string) => {
    if (!images.includes(image)) {
      addImage(image);
    } else if (images.includes(image)) {
      const arr = images.filter((img) => img !== image);
      cleanImagesState();
      addImages(arr);
    }
  };

  /**
   * Handles the select all functionality for images.
   * @param {boolean} selected - Whether all images are selected or not.
   */
  const handleSelectAll = (selected: boolean) => {
    if (selected) {
      //@ts-ignore
      addImages(data.images);
      setSelectState(true);
    }
    if (!selected) {
      cleanImagesState();
      setSelectState(false);
    }
  };

  /**
   * Downloads a zip file containing the product images.
   * @returns void
   */
  const handleImageDownload = () => {
    createZip(images, "Product Images");
  };

  /**
   * Downloads a zip file containing the variant images.
   */
  const handleVarientImageDownload = () => {
    createZip(varientImages, "Varient Images");
  };

  useEffect(() => {
    const id = params.ID;
    getJob(id);
    cleanImagesState();
  }, []);

  return (
    <div className="px-10 min-h-screen">
      {isLoading && (
        <div className="w-screen h-screen flex justify-center items-center">
          <ClipLoader />{" "}
        </div>
      )}
      <div className="px-10 py-2">
        <h1 className="text-xl font-mono">
          URL: <span className="text-blue-500">{data?.url}</span>
        </h1>
        <p className="text-lg font-mono">
          ID: <span className="text-orange-400 font-semibold">{params.ID}</span>
        </p>
      </div>
      <hr className="" />
      <div className="px-10 py-5">
        <h1 className="text-xl dark:text-zinc-300">
          <div>
            {data?.titles.map((title, i) => (
              <h1 key={i} className="py-1">
                {`Title: `}
                <span className="text-xl font-serif dark:text-white">
                  {title}
                </span>
              </h1>
            ))}
          </div>
        </h1>
      </div>
      <hr className="" />
      <div className="w-full pb-6 pt-5">
        <div className="">
          <div className="flex justify-between">
            <h1 className="text-xl font-sans">Product Images: </h1>
            <Button onClick={handleImageDownload}>Download</Button>
          </div>
          <div>
            <Checkbox onCheckedChange={handleSelectAll} />{" "}
            <span className="pl-2">Select All</span>
            <div className="w-full grid grid-cols-4 gap-3">
              {data?.images.map((image, i) => (
                <ImageCard
                  url={image}
                  key={i}
                  handleImageSelect={handleImageSelect}
                  images={images}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
      <hr className="py-6" />
      <div className="pb-6">
        <div className="w-full flex justify-between pb-5">
          <h1 className="text-xl font-sans">Varients:</h1>
          <Button onClick={handleVarientImageDownload}>Download</Button>
        </div>
        {data?.varients && (
          <VarientsTable data={data?.varients} columns={VarientCols} />
        )}
      </div>
      <hr className="" />
      <div className="py-5">
        <h1 className="text-xl">Description Generator</h1>
        {data && (
          <DescriptionGenerator
            titles={data.titles}
            images={data.images}
            id={params.ID}
            specs={data.specifications}
          />
        )}
      </div>
    </div>
  );
};

export default page;
