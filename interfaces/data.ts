import React from "react";

export type varient = {
  model: string;
  image?: string;
  type?: string;
};

export type data = {
  title: string;
  images: string[];
  varients: varient[];
};

export type JobType = {
  ID: string;
  status: "RUNNING" | "FINISHED" | "ERROR";
  data?: data | string;
};
