import { data } from "@/interfaces/data";
import useAuthStore from "@/store/AuthStore";
import axios from "axios";
import { useState } from "react";

const useGetJob = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState<data | null>(null);
  const { user } = useAuthStore();
  const token = user?.token;

  const getJob = async (id: string) => {
    setIsLoading(true);

    const res = await axios({
      method: "get",
      url: `${process.env.NEXT_PUBLIC_API}/api/job/${id}`,
      headers: { Authorization: `Bearer ${token}` },
    });

    switch (res.status) {
      case 201:
        setError(res.data.message);
      case 200:
        setData(res.data);
    }

    setIsLoading(false);
  };

  return { isLoading, error, data, getJob };
};

export default useGetJob;
