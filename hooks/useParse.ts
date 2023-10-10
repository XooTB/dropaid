"use client";

import { useState } from "react";
import useDataStore from "@/store/dataStore";
import axios from "axios";

const useParse = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { addData } = useDataStore();

  const parseProduct = async (url: string, keywords?: string[]) => {
    setIsLoading(true);

    const response = await axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API}/api/parse`,
      data: {
        url,
        keywords,
      },
      timeout: 200000,
    });

    const data = await response.data;

    if (response.status === 500) {
      setError(true);
      console.log(response.data);
    }

    if (data) {
      addData(data);
    }

    setIsLoading(false);
  };

  return { isLoading, error, errorMessage, parseProduct };
};

export default useParse;
