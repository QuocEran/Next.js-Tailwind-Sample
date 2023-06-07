import { create } from "zustand";

import { createJSONStorage, persist } from "zustand/middleware";

interface AppStoreState {
  openDrawer: boolean;
  setOpenDrawer: (value: boolean) => void;
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

const appStore = create<AppStoreState>()(
  persist(
    (set, get) => ({
      openDrawer: false,
      setOpenDrawer(value: boolean) {
        set((state) => ({ ...state, openDrawer: value }));
      },

      theme: "light",
      setTheme: (theme: "light" | "dark") => {
        set((state) => ({
          ...state,
          theme: theme,
        }));
      },
    }),
    { name: "app", storage: createJSONStorage(() => localStorage) },
  ),
);

export default appStore;
