import { create } from "zustand";
import { JobType } from "@/interfaces/data";

type jobsStore = {
  jobs: JobType[] | null;
  addJobs: (jobs: JobType[]) => void;
  removeJobs: () => void;
};

const useJobsStore = create<jobsStore>()((set) => ({
  jobs: null,
  addJobs: (jobs: JobType[]) => {
    set(() => ({ jobs }));
  },
  removeJobs: () => {
    set(() => ({}));
  },
}));

export default useJobsStore;
