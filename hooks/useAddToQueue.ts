import useQueryStore from "@/store/queryStore";
import axios from "axios";
import { useState } from "react";

const useAddToQueue = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { url, keywords } = useQueryStore();

  const addToQueue = async () => {
    setIsLoading(true);

    const response = await axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API}/api/parse`,
      data: {
        url,
        keywords,
      },
    });

    const data = await response.data;
    setIsLoading(false);

    return data;
  };

  return { isLoading, error, addToQueue };
};

export default useAddToQueue;
