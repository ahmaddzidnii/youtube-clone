import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UseSidebar {
  isOpen: boolean;
  sidebar_medium_open: boolean;
  onOpen: () => void;
  onClose: () => void;
  setSidebarMediumState: (state: boolean) => void;
}
// export const useSidebar = create<UseSidebar>((set) => ({
//   isOpen: false,
//   sidebar_medium_open: false,
//   onOpen: () => set({ isOpen: true }),
//   onClose: () => set({ isOpen: false }),
//   setSidebarMediumState: (state) => set({ sidebar_medium_open: state }),
// }));

export const useSidebar = create(
  persist<UseSidebar>(
    (set, get) => ({
      isOpen: false,
      sidebar_medium_open: false,
      onOpen() {
        set({ isOpen: true });
      },
      onClose() {
        set({ isOpen: false });
      },
      setSidebarMediumState(state) {
        set({ sidebar_medium_open: state });
      },
    }),
    {
      name: "sidebar-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
