import useAuthStore from "@/store/AuthStore";
import useQueryStore from "@/store/queryStore";
import axios from "axios";
import { useState } from "react";

const useAddToQueue = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useAuthStore();

  const token = user?.token;

  const addToQueue = async (url: string, keywords: string[]) => {
    setIsLoading(true);

    const response = await axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API}/api/parse`,
      data: {
        url,
        keywords,
      },
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status === 200) {
      const data = await response.data;
      return data;
    } else if (response.status === 201) {
      setError("Not Authorized");
    }

    setIsLoading(false);
  };

  return { isLoading, error, addToQueue };
};

export default useAddToQueue;
