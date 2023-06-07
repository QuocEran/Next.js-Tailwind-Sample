import UserResponse from "types/response/auth/userResponse";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserStoreState {
  access_token: string;
  saveAccessToken: (access_token: string) => void;
  user: UserResponse;
  saveUserInfo: (userInfo: UserResponse) => void;
  logout: () => void;
}

const userStore = create<UserStoreState>()(
  persist(
    (set, get) => ({
      access_token: "",
      saveAccessToken: (accessToken) => {
        set((state) => ({
          ...state,
          access_token: accessToken,
        }));
      },

      user: new UserResponse(),
      saveUserInfo: (userInfo: UserResponse) => {
        set((state) => ({
          ...state,
          user: userInfo,
        }));
      },

      logout: () => {
        set((state) => ({
          access_token: "",
          user: new UserResponse(),
        }));
      },
    }),

    { name: "user", storage: createJSONStorage(() => localStorage) },
  ),
);

export default userStore;
