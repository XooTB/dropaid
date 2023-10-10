import { create } from "zustand";

type queryStore = {
  url: string;
  keywords: string[];
  addQuery: (url: string, keywords: string[]) => void;
  removeQuery: () => void;
};

const useQueryStore = create<queryStore>()((set) => ({
  url: "",
  keywords: [],
  addQuery: (url: string, keywords: string[]) =>
    set((state) => ({ url, keywords })),
  removeQuery: () => set((state) => ({ url: "", keywords: [] })),
}));

export default useQueryStore;
