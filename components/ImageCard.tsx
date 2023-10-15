import Image from "next/image";
import React from "react";
import { Checkbox } from "./ui/checkbox";

const ImageCard = ({
  url,
  handleClick,
}: {
  url: string;
  handleClick: (image: string) => void;
}) => {
  const clicked = () => {
    handleClick(url);
  };

  return (
    <div className="">
      <Checkbox
        className="relative top-7 left-2 border-black w-5 h-5"
        onClick={clicked}
      />
      <img src={url} alt="url" className="" />
    </div>
  );
};

export default ImageCard;
