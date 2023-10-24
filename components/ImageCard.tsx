import Image from "next/image";
import React, { HtmlHTMLAttributes } from "react";
import { Checkbox } from "./ui/checkbox";

type ImageCardProps = {
  url: string;
  handleImageSelect: (image: string) => void;
  images: string[];
};

const ImageCard = ({ url, handleImageSelect, images }: ImageCardProps) => {
  const clicked = () => {
    handleImageSelect(url);
  };

  const selected = () => {
    return images?.includes(url);
  };

  return (
    <div>
      <Checkbox
        className="relative top-7 left-2 border-black w-5 h-5"
        onClick={clicked}
        checked={selected()}
      />
      <img src={url} alt="url" />
    </div>
  );
};

export default ImageCard;
