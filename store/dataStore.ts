import { create } from "zustand";
import { data } from "@/interfaces/data";

type dataStore = {
  data: data | null;
  addData: (data: data) => void;
  removeData: () => void;
};

const useDataStore = create<dataStore>()((set) => ({
  data: null,
  addData: (data: data) => {
    set((state) => ({ data }));
  },
  removeData: () => {
    set((state) => ({}));
  },
}));

export default useDataStore;
