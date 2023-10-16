import React, { useState } from "react";
import JSZip from "jszip";
import useDownloadStore from "@/store/DownloadStore";

const extractFilename = (name: string) => {
  const regex = /\/([^/]+\.(jpg|jpeg|png|webp))$/i;

  const match = regex.exec(name);

  if (match) {
    return match[0];
  }
};

const useDownloadImage = () => {
  const zip = new JSZip();

  const createZip = async (images: string[], output: string) => {
    images.forEach(async (url, i) => {
      const filename = extractFilename(url);

      let blob = fetch(url).then((r) => r.blob());

      //@ts-ignore
      zip.file(filename, blob, { binary: true });

      if (i === images.length - 1) {
        // Generate the zip file
        const zipData = await zip.generateAsync({
          type: "blob",
          streamFiles: true,
        });

        // Create a download link for the zip file
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(zipData);
        link.download = `${output}.zip`;
        link.click();
      }
    });
  };

  return { createZip };
};

export default useDownloadImage;
