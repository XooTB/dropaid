import React from "react";

export type varient = {
  model: string;
  image?: string;
  type?: string;
};

export type specification = {
  category: string;
  value: string;
};

export type data = {
  titles: string[];
  url: string;
  images: string[];
  varients: varient[];
  specifications: specification[];
  description?: string;
};

export type JobType = {
  ID: string;
  status: "RUNNING" | "FINISHED" | "ERROR";
  data?: data | string;
};
