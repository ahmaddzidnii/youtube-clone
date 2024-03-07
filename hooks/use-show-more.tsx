import { create } from "zustand";

interface UseShowMore {
  showMore: boolean;
  setShowMore: (value: boolean) => void;
}
export const useShowMore = create<UseShowMore>((set) => ({
  showMore: false,
  setShowMore: (value: boolean) => set({ showMore: value }),
}));
