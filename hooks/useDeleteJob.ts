import useAuthStore from "@/store/AuthStore";
import axios from "axios";
import { useState } from "react";

const useDeleteJob = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuthStore();
  const token = user?.token;

  const deleteJob = async (id: string) => {
    setIsLoading(true);

    const response = await axios({
      method: "delete",
      url: `${process.env.NEXT_PUBLIC_API}/api/job/delete/${id}`,
      headers: { Authorization: `Bearer ${token}` },
    });

    const message = await response.data.message;

    if (response.status === 200) {
      setIsLoading(false);
      return {
        status: response.status,
        message: message,
      };
    }

    setIsLoading(false);
  };

  return { isLoading, deleteJob };
};

export default useDeleteJob;
