import { create } from "zustand";
import { data } from "@/interfaces/data";

type DownloadStore = {
  images: string[];
  varientImages: string[];
  addImage: (image: string) => void;
  addVarientImage: (image: string) => void;
  addImages: (images: string[]) => void;
  addVarientImages: (images: string[]) => void;
  removeImage: (image: string) => void;
  removeVarientImage: (image: string) => void;
  cleanImagesState: () => void;
  cleanVarientState: () => void;
};

const useDownloadStore = create<DownloadStore>()((set) => ({
  images: [],
  varientImages: [],
  addImage: (image: string) => {
    set((state) => ({ images: [...state.images, image] }));
  },
  addVarientImage: (image: string) => {
    set((state) => ({ varientImages: [...state.varientImages, image] }));
  },
  addImages: (images: string[]) => {
    set(() => ({ images: [...images] }));
  },
  addVarientImages(images) {
    set(() => ({ varientImages: [...images] }));
  },
  removeImage: (image: string) => {
    set((state) => {
      const arr = state.images.filter((el) => el !== image);
      return { images: [...arr] };
    });
  },
  removeVarientImage: (image: string) => {
    set((state) => {
      const arr = state.varientImages.filter((el) => el !== image);
      return { varientImages: [...arr] };
    });
  },
  cleanImagesState: () => {
    set((state) => ({ images: [], varientImages: [] }));
  },
  cleanVarientState: () => {
    set((state) => ({ varientImages: [] }));
  },
}));

export default useDownloadStore;
