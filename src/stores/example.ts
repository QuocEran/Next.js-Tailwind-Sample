import create from "zustand";

interface ExampleStoreState {
  reload: boolean;
  setReload: () => void;
  access_token: string;
  saveAccessToken: (access_token: string) => void;
}

const exampleStore = create<ExampleStoreState>()((set, get) => ({
  reload: false,
  setReload() {
    set((state) => ({ ...state, reload: !get().reload }));
  },

  access_token: "",
  saveAccessToken: (accessToken) => {
    set((state) => ({
      ...state,
      access_token: accessToken,
    }));
  },
}));

export default exampleStore;
