import useAuthStore from "@/store/AuthStore";
import useJobsStore from "@/store/jobsStore";
import axios from "axios";
import { useState } from "react";

const useGetJobs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { addJobs } = useJobsStore();
  const { user } = useAuthStore();
  const token = user?.token;

  const getJobs = async () => {
    setIsLoading(true);

    const response = await axios({
      method: "get",
      url: `${process.env.NEXT_PUBLIC_API}/api/user/jobs`,
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.data.jobs;

    switch (response.status) {
      case 200:
        addJobs(
          data.map((job: any) => ({
            ID: job.ID,
            status: job.status,
            data: job.data ? job.data : "",
          }))
        );
        setIsLoading(false);
        return;
      case 401:
        setError("Not Authorized");
        setIsLoading(false);
        return;
    }

    setIsLoading(false);
  };

  return { isLoading, getJobs, error };
};

export default useGetJobs;
