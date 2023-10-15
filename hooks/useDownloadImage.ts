import React, { useState } from "react";
import JSZip from "jszip";
import useDownloadStore from "@/store/DownloadStore";

const useDownloadImage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, seterror] = useState("");
  const { images } = useDownloadStore();

  const zip = new JSZip();

  const createZip = async () => {
    const regex = /([^\/]+)\.jpg$/;

    images.forEach(async (url, i) => {
      const names = regex.exec(url);
      //@ts-ignore
      const filename = `${names[0]}`;

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
        link.download = "ProductImages.zip";
        link.click();
      }
    });
  };

  return { isLoading, error, createZip };
};

export default useDownloadImage;
