"use client";

import React, { useEffect } from "react";
import useJobsStore from "@/store/jobsStore";
import JobsTable from "@/components/JobsTable";
import { Columns } from "@/components/Colums";
import { Separator } from "@/components/ui/separator";
import useGetJobs from "@/hooks/useGetJobs";
import { Button } from "@/components/ui/button";
import { RotateCw } from "lucide-react";
import { ClipLoader } from "react-spinners";
import useAuthStore from "@/store/AuthStore";
import { useRouter } from "next/navigation";
import { data } from "@/constants/data";

const page = () => {
  const { jobs } = useJobsStore();
  const { isLoading, getJobs, error } = useGetJobs();
  const { user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/auth");
    }

    getJobs();

    const intervalId = setInterval(() => {
      getJobs();
    }, 30000);

    return () => clearInterval(intervalId);
  }, []);

  const handleRefresh = () => {
    getJobs();
  };

  return (
    <div className="w-full flex justify-center flex-col items-center px-20 pb-10">
      <h1 className="text-3xl font-sans font-medium py-5">All Jobs</h1>
      <Separator />
      <div className="w-full pt-10 flex items-center justify-center flex-col">
        <div className="flex justify-between pb-3 w-1/2">
          <Button className="gap-1" onClick={handleRefresh}>
            <RotateCw width={16} /> Refresh
          </Button>
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <div className="flex justify-center w-1/2">
          {!isLoading && jobs ? (
            <JobsTable columns={Columns} data={jobs} />
          ) : (
            <div></div>
          )}
          {isLoading && <ClipLoader color="white" />}
        </div>
      </div>
    </div>
  );
};

export default page;
