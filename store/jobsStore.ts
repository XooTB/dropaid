import { create } from "zustand";
import { JobType } from "@/interfaces/data";

type jobsStore = {
  jobs: JobType[] | null;
  addJobs: (jobs: JobType[]) => void;
  removeJobs: () => void;
  removeJob: (id: string) => void;
};

const useJobsStore = create<jobsStore>()((set) => ({
  jobs: null,
  addJobs: (jobs: JobType[]) => {
    set(() => ({ jobs }));
  },
  removeJobs: () => {
    set(() => ({}));
  },
  removeJob: (id: string) => {
    set((state) => {
      const jobs = state.jobs?.filter((job) => job.ID !== id);

      return { jobs };
    });
  },
}));

export default useJobsStore;
