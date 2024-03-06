import { create } from "zustand";

interface UseSidebar {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
export const UseSidebar = create<UseSidebar>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
