"use client";

import React from "react";
import useJobsStore from "@/store/jobsStore";
import JobsTable from "@/components/JobsTable";
import { Columns } from "@/components/Colums";
import { data } from "@/constants/data";
import { Separator } from "@/components/ui/separator";

const page = () => {
  const { jobs } = useJobsStore();

  return (
    <div className="w-full flex justify-center flex-col items-center px-20">
      <h1 className="text-3xl font-sans font-medium py-5">All Jobs</h1>
      <Separator />
      <div className="w-full flex justify-center pt-10">
        <JobsTable columns={Columns} data={data} />
      </div>
    </div>
  );
};

export default page;
