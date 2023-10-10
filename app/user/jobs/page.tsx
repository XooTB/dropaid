"use client";

import React from "react";
import useJobsStore from "@/store/jobsStore";
import JobsTable from "@/components/JobsTable";
import { Columns } from "@/components/Colums";
import { data } from "@/constants/data";

const page = () => {
  const { jobs } = useJobsStore();

  return (
    <div className="w-full flex justify-center flex-col items-center">
      <h1 className="text-3xl font-sans font-medium py-5">All Jobs</h1>
      <div className="w-full flex justify-center">
        <JobsTable columns={Columns} data={data} />
      </div>
    </div>
  );
};

export default page;
