"use client";

import React, { useEffect } from "react";
import useJobsStore from "@/store/jobsStore";
import JobsTable from "@/components/JobsTable";
import { Columns } from "@/components/Colums";
import { data } from "@/constants/data";
import { Separator } from "@/components/ui/separator";
import useGetJobs from "@/hooks/useGetJobs";
import { Button } from "@/components/ui/button";
import { RotateCw } from "lucide-react";
import { ClipLoader } from "react-spinners";

const page = () => {
  const { jobs } = useJobsStore();
  const { isLoading, getJobs } = useGetJobs();

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div className="w-full flex justify-center flex-col items-center px-20 pb-10">
      <h1 className="text-3xl font-sans font-medium py-5">All Jobs</h1>
      <Separator />
      <div className="w-full pt-10 flex items-center justify-center flex-col">
        <div className="flex justify-start pb-3 w-1/2">
          <Button className="gap-1 ">
            <RotateCw width={16} /> Refresh
          </Button>
        </div>
        <div className="flex justify-center w-1/2">
          {!isLoading && jobs ? (
            <JobsTable columns={Columns} data={jobs} />
          ) : (
            <div></div>
          )}
          {isLoading && <ClipLoader />}
        </div>
      </div>
    </div>
  );
};

export default page;
