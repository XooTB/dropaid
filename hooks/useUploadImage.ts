import useAuthStore from "@/store/AuthStore";
import axios from "axios";
import { useState } from "react";

const useUploadImage = () => {
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [urls, seturls] = useState<string[]>([]);
  const { user } = useAuthStore();
  const token = user?.token;

  const uploadImages = async (urls: string[], id: string) => {
    setisLoading(true);

    const response = await axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API}/api/image/upload/${id}`,
      data: {
        images: urls,
      },
      headers: { Authorization: `Bearer ${token}` },
    });

    switch (response.status) {
      case 200:
        seturls(response.data.urls);
        setisLoading(false);
        return;
      case 401:
        return;
    }

    setisLoading(false);
  };

  return { isLoading, urls, uploadImages };
};

export default useUploadImage;
